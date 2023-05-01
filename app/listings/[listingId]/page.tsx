import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import getReservation from "@/app/actions/getReservations";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";

interface IParams {
    listingId?: string;
}

const ListingPage =  async ({params}:{params: IParams}) => {
    const listing = await getListingById(params);
    const reservations = await getReservation(params)
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        )
    }

    return ( 
        <div>
            <ListingClient 
                listing={listing}
                reservations={reservations}
                currentUser={currentUser}
            />
        </div>
     );
}
 
export default ListingPage;