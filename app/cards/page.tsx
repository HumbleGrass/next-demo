"use client";

import { Card } from "@/components/ui/card";
import CreateAccount from "@/ui/cards/createAccount";
import TeamMembers from "@/ui/cards/teamMembers";
import Share from "@/ui/cards/share";
import Notifications from "@/ui/cards/notifications";
import ReportIssue from "@/ui/cards/reportIssue";
import PickDate from "@/ui/cards/pickDate";
import PaymentMethod from "@/ui/cards/paymentMethod";
import Shadcn from "@/ui/cards/shadcn";
import CookiesSetting from "@/ui/cards/cookiesSetting";

export default function Page() {
  return (
    <div className='py-8'>
      <Card className='items-start grid lg:grid-cols-2 xl:grid-cols-3 gap-6 p-8'>
        <div className='col-span-1 grid gap-6'>
          <CreateAccount></CreateAccount>
          <PaymentMethod></PaymentMethod>
        </div>
        <div className='col-span-1 grid gap-6'>
          <TeamMembers></TeamMembers>
          <Share></Share>
          <PickDate></PickDate>
          <Notifications></Notifications>
        </div>
        <div className='col-span-1 grid gap-6'>
          <ReportIssue></ReportIssue>
          <Shadcn></Shadcn>
          <CookiesSetting></CookiesSetting>
        </div>
      </Card>
    </div>
  );
}
