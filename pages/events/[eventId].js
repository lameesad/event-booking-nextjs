import { Fragment } from 'react';


import { getEventById, getAllEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
function EventDetailPage(props) {

    const event = props.selectedEvents;

    if (!event) {
        return (
            <ErrorAlert>
                <p>No event found!</p>
            </ErrorAlert>
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
        }
    }
}

export async function getStaticPaths() {
    const events = await getAllEvents();

    const paths = events.map(event => ({ params: { eventId: event.id } }))
    return {
        paths: paths,
        // we set fallback false because we specify all possible paths
        fallback: false
    }
}

export default EventDetailPage;