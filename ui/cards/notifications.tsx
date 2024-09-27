"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { PersonIcon } from "@radix-ui/react-icons";

const notificationList = [
  {
    title: "Everything",
    description: "Email digest, mentions & all activity.",
  },
  {
    title: "Available",
    description: "Only mentions and comments.",
  },
  {
    title: "Ignoring",
    description: "Turn off all notifications.",
  },
];
export default function Notifications() {
  return (
    <Card>
      <CardHeader className='pb-3'>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Choose what you want to be notified about.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-1'>
          {notificationList.map((item) => {
            return (
              <div
                key={item.title}
                className='flex items-start hover:bg-accent p-2 rounded-md cursor-pointer'
              >
                <div className='mr-4'>
                  <PersonIcon className='w-5 h-5'></PersonIcon>
                </div>
                <div className='space-y-1'>
                  <div className='font-medium text-sm leading-none'>
                    {item.title}
                  </div>
                  <div className='text-muted-foreground text-sm'>
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
