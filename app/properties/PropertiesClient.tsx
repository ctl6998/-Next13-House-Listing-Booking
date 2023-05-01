'use client';

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { SafeListing, SafeUser } from "../types";
import { toast } from "react-hot-toast";
import axios from "axios";

interface PropertiesClientProps {
    listings: SafeListing[] | undefined;
    currentUser?: SafeUser | null;
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
    listings,
    currentUser
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    //Delete properties by Id
    const onCancel = useCallback((id: string) => {
        setDeletingId(id);
        axios.delete(`api/listing/${id}`)
        .then(() => {
            toast.success('Listing deleted');
            router.refresh();
        })
        .catch((error) => {
            toast.error(error?.response?.data?.error);
        })
        .finally(() => {
            setDeletingId('');
        });
    }, [router])

    return ( 
    <Container>
        <Heading 
            title="Properties"
            subtitle="List of your properties"
        />
        <div 
            className="
                mt-10
                grid
                gird-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xk:grid-cols-5
                2xl:grid-cols-6
                gap-8
            "
        >
            {listings?.map((listing) => (
                <ListingCard 
                    key={listing.id}
                    data={listing}
                    actionId={listing.id}
                    onAction={onCancel}
                    disabled={deletingId == listing.id}
                    actionLabel="Delete properties"
                    currentUser={currentUser}
                />
            ))}
        </div>
    </Container>
    );
}
 
export default PropertiesClient;