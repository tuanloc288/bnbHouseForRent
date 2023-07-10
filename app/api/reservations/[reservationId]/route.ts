import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from '@/app/libs/prismadb'

interface IParams {
    reservationId?: string
}

export async function DELETE(
    request: Request,
    { params }: { params: IParams }
) {
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return NextResponse.error()
    }

    const { reservationId } = params

    if(!reservationId || typeof reservationId !== 'string'){
        throw new Error('Invalid reservation ID!')
    }

    const reservation = await prisma.reservation.deleteMany({
        where: {
            id: reservationId,
            OR: [
                { userId: currentUser.id },
                { listing: { userId: currentUser.id } }
            ] // this OR is to limit only who that make the reservation OR the 
              // one create the listing can delete/cancel reservation 
        }
    })

    return NextResponse.json(reservation)
}   