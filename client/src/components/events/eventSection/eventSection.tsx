import WorkshopCarousel from  "../WorkshopCarousel/WorkshopCarousel";
import { EventSectionProps } from "../../../types/event";
export default function EventSection({ events }: { events: EventSectionProps }) {
    return (
        <section className="bg-gray-100 py-12">
            <div>
                {/* <EventContainer events={events} /> */}

                <h1 className="text-3xl font-semibold text-gray-800 center-align">
                    {events.event_type}
                </h1>
                <WorkshopCarousel events={events.events} />
            </div>
        </section>
    );
}
