import prisma from "../libs/prismadb";

interface IParams {
    listingId?: string;
}

export default async function getListingById(
    params: IParams
) {
    try {
        const { listingId } = params;

        const listing = await prisma.listing.findUnique({
            where: {
                id: listingId
            },
            include: {
                user: true
            }
        });

        if (!listing) {
            return null;
        }

        return {
            ...listing,
            createAt: listing.createAt.toString(),
            user: {
                ...listing.user,
                createAt: listing.user.createAt.toString(),
                updatedAt: listing.user.updateAt.toString(),
                emailVerified: listing.user.emailVerified?.toString() || null,
            }
        }
    } catch(error: any) {
        throw new Error(error)
    }
}