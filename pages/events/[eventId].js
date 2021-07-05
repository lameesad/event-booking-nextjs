import { Fragment } from 'react';


import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
function EventDetailPage(props) {

    const event = props.selectedEvents;

    if (!event) {
        return (
            <div className="center">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        // fragment needed if you have JSON XML element
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}
// we need the context because we need to know which specific id we wanna load the data
export async function getStaticProps(context) {
    const eventId = context.params.eventId;

    const event = await getEventById(eventId)
    return {
        props: {
            selectedEvents: event
        },
        revalidate: 30
    }
}

export async function getStaticPaths() {
    // pregenerate only the featured events
    const events = await getFeaturedEvents();

    const paths = events.map(event => ({ params: { eventId: event.id } }))
    return {
        paths: paths,
        // we set fallback false because we specify all possible paths
        // we set it back to true because we didn't genarate all the events
        // we set then to blocking In that case, next.js will not serve anything until we're done generating this page.
        fallback: 'blocking'
    }
}

export default EventDetailPage;