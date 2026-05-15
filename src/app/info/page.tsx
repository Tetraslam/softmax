import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "info — softmax",
  description: "house info & rules for guests",
  robots: "noindex, nofollow",
};

export default function InfoPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="space-y-12 sm:space-y-16">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            guest info
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            everything you need to know while staying with us
          </p>
        </div>

        {/* Wifi */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">address</h2>
          <div className="bg-accent/30 rounded-lg p-4 sm:p-6 space-y-1 text-sm sm:text-base">
            <p>45 Lansing St, Apt 1205</p>
            <p>San Francisco, CA 94105</p>
            <p className="text-muted-foreground">(Jasper Apartments)</p>
          </div>
        </section>

        {/* Wifi */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">wifi</h2>
          <div className="bg-accent/30 rounded-lg p-4 sm:p-6 space-y-1 font-mono text-sm sm:text-base">
            <p>
              <span className="text-muted-foreground">network:</span> softmax
            </p>
            <p>
              <span className="text-muted-foreground">password:</span>{" "}
              wearecharliekirk
            </p>
          </div>
        </section>

        {/* Kitchen */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">kitchen</h2>
          <ul className="space-y-3 text-sm sm:text-base text-muted-foreground list-disc list-inside">
            <li>clean up after yourself!</li>
            <li>pans are in the cabinets in the island</li>
            <li>
              cutlery and tongs are in the cabinet under the counter, to the
              left of the stove (or right under it)
            </li>
            <li>
              glasses and plates are in the cabinet above the center of the
              kitchen
            </li>
            <li>water is in the fridge door</li>
            <li>we have juices in the fridge — feel free to grab some!</li>
            <li>
              check if the dishwasher has clean dishes before putting dirty
              stuff in
            </li>
            <li>
              if the trash is getting full, take it out to the trash chute and
              replace the bags (always double bag — bags are in the cabinet all
              the way to the left, below/to the left of the sink)
            </li>
          </ul>
        </section>

        {/* Rules */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">rules</h2>
          <ul className="space-y-3 text-sm sm:text-base text-muted-foreground list-disc list-inside">
            <li>
              don&apos;t enter the three bedrooms without knocking and getting
              permission from the resident
            </li>
            <li>
              laundry is loud — don&apos;t run it at night if people are
              sleeping on the couch/outside or if there&apos;s an event going on
            </li>
            <li>
              if you lower the living room blinds while sleeping, raise them
              when you wake up
            </li>
            <li>
              if sleeping on the sofa or air mattress: when you wake up, put
              away blankets and pillows in the storage compartment under the
              sofa. if you used an air mattress, deflate it, fold it, and put it
              next to the shoe racks where we keep boxes
            </li>
          </ul>
        </section>

        {/* Keycard */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">keycard</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            please return the keycard we give you! they cost $18 to replace so
            we&apos;ll need to charge you if it gets lost. just be mindful of it
            and you&apos;ll be fine :)
          </p>
        </section>

        {/* Matic (robot vacuum) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">matic</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            we have a robot vacuum (matic) that runs at 11:30 am every day.
            please be nice to it! if it gets stuck in the common bathroom (which
            happens), lift it out so it can continue on its way. if it&apos;s
            low on charge, carry it to the charging dock by the front door.
          </p>
        </section>

        {/* Amenities */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">amenities</h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            the gym, pool, sauna, and jacuzzi are on the 2nd floor. you need a
            keycard to access them, so go with a resident your first time. feel
            free to ask one of us to come along — or just grab the card and go
            solo after that!
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">need help?</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-3">
            reach out to any of the residents:
          </p>
          <div className="space-y-2 text-sm sm:text-base">
            <p>
              <span className="font-medium">shresht</span>{" "}
              <a
                href="tel:6175930126"
                className="text-muted-foreground underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors"
              >
                (617) 593-0126
              </a>
            </p>
            <p>
              <span className="font-medium">william</span>{" "}
              <a
                href="tel:4255025419"
                className="text-muted-foreground underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors"
              >
                (425) 502-5419
              </a>
            </p>
            <p>
              <span className="font-medium">mouad</span>{" "}
              <a
                href="tel:7818745666"
                className="text-muted-foreground underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors"
              >
                (781) 874-5666
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
