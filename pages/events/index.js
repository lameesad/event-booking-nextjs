import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';

function AllEventsPage() {

    const events = getAllEvents();

    return (
        <Fragment>

            <EventList items={events} />
        </Fragment>
    );
}

export default AllEventsPage;
