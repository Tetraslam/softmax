import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "sponsors — softmax",
  description: "partner with softmax house",
};

export default function SponsorsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12 min-h-[calc(100vh-8rem)] flex flex-col justify-center">
      <div className="space-y-10 sm:space-y-12">
        {/* Hero */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            partner with softmax
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            reach exceptional builders. support our community.
          </p>
        </div>

        {/* Main Value Prop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Oomfboard */}
          <div className="space-y-6">
            <div className="border-l-[3px] border-l-[#A67C52] pl-5 space-y-1">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold group relative inline-block cursor-help lg:border-b lg:border-dotted lg:border-primary/40">
                  oomfboard
                  <span className="hidden lg:block absolute -top-8 left-0 px-2 py-1 bg-popover border border-border text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    one of my friends
                  </span>
                </h2>
                <p className="text-xs text-muted-foreground/60 mt-1 lg:hidden">
                  ↑ one of my friends
                </p>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground">
                featured placement on our invite-only job board
              </p>
            </div>
            <div className="text-sm text-muted-foreground space-y-3 pl-5">
              <p>
                founding eng, ml infra, hardware, systems, gtm, design, ops, sales — from top ai labs, and the best startups.
              </p>
              <p className="text-xs">
                invite-only · $150k+ · no recruiters
              </p>
            </div>
          </div>

          {/* Everything Else */}
          <div className="space-y-4">
            <div className="border-l-[3px] border-l-[#C49A6C] pl-5">
              <h2 className="text-xl sm:text-2xl font-semibold">
                community access
              </h2>
            </div>
            <div className="grid gap-3 pl-5">
              <div className="text-sm">
                <span className="font-medium">discord + demo dinners</span>
                <p className="text-xs text-muted-foreground">
                  direct access to residents, community members, and what they're building
                </p>
              </div>
              <div className="text-sm">
                <span className="font-medium">event sponsorship</span>
                <p className="text-xs text-muted-foreground">
                  tier-2 sponsorship and tier-1 presence at all our events :)
                </p>
              </div>
              <div className="text-sm">
                <span className="font-medium">co-branded content + merch</span>
                <p className="text-xs text-muted-foreground">
                  collaborations on twitter, instagram, youtube, and our merch drops
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="border-t border-border pt-8 sm:pt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-2">
            <p className="text-3xl sm:text-4xl font-semibold">$500/month</p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              month-to-month · includes everything above
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-base sm:text-lg font-medium">
              +$250/month <span className="font-normal text-muted-foreground text-sm">(optional)</span>
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              support our quant fund trading on polymarket + kalshi
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-border pt-6 sm:pt-8">
          <Link
            href="mailto:bhowmickshresht@gmail.com"
            className="text-lg sm:text-xl text-foreground underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-colors font-medium"
          >
            bhowmickshresht@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
}

