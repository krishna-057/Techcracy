import data from "../../data/events/events.json";
import EventContainer from "../../components/events/cards/EventContainer";
const EventPage = () => {
    const events = data;
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-semibold text-gray-800">Events</h1>

            <div className="">
                <EventContainer events={events} />
            </div>
        </main>
    );
};

export default EventPage;
