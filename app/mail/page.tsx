"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import {
  GitHubLogoIcon,
  MagnifyingGlassIcon,
  DotsVerticalIcon,
} from "@radix-ui/react-icons";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { Command, CommandList, CommandItem } from "@/components/ui/command";

import { Textarea } from "@/components/ui/textarea";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

import clsx from "clsx";

import { useState, useEffect } from "react";
import {
  IMenuItem,
  IMessageItem,
  IconElement,
  emailList,
  InboxList,
  SocialList,
  MessageList,
  ToolbarLeftList,
  ToolbarRightList,
} from "./data";

import mailStyle from "./mail.module.css";

function AsideItem({
  menu,
  isCollapse,
}: {
  menu: IMenuItem;
  isCollapse: boolean;
}) {
  return (
    <div
      key={menu.title}
      className={clsx(
        "flex justify-between items-center h-9 p-3 cursor-pointer rounded-md",
        {
          "bg-black": menu.active,
          "text-white": menu.active,
          "hover: bg-black": menu.active,
          "hover:bg-muted": !menu.active,
          "hover:bg-opacity-80": menu.active,
          "w-9": isCollapse,
          "justify-center": isCollapse,
        }
      )}
    >
      <div className='flex items-center gap-2'>
        {isCollapse ? (
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <menu.icon className='w-4 h-4' />
              </TooltipTrigger>
              <TooltipContent side='right' sideOffset={14}>
                {menu.title}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <>
            <menu.icon className='w-4 h-4' />
            <span className={clsx({ hidden: isCollapse })}>{menu.title}</span>
          </>
        )}
      </div>
      <div className={clsx({ hidden: isCollapse })}>{menu.number}</div>
    </div>
  );
}

function ToolbarItem({ menu }: { menu: IMenuItem }) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>
          <Button variant='ghost' size='icon' className='w-9 h-9'>
            <menu.icon className='w-4 h-4'></menu.icon>
          </Button>
        </TooltipTrigger>
        <TooltipContent>{menu.title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

function Message({ message }: { message: IMessageItem }) {
  return (
    <Button
      variant='outline'
      className='w-full h-auto p-3 flex-col items-start gap-2'
    >
      <div className='w-full flex items-center justify-between'>
        <div className='flex items-center gap-2 text-sm font-bold'>
          <div>{message.title}</div>
          {!message.isRead && (
            <div className='w-2 h-2 rounded-[50%] bg-blue-500'></div>
          )}
        </div>
        <div className='text-xs text-foreground'>{message.time}</div>
      </div>
      <div className='text-xs font-medium'>{message.subtitle}</div>
      <div className='text-xs text-muted-foreground line-clamp-2 whitespace-break-spaces'>
        {message.desc}
      </div>
      <div className='flex float-start gap-2'>
        {message.tag.map((tag, index) => (
          <Badge key={index} variant={tag.active ? "default" : "outline"}>
            {tag.title}
          </Badge>
        ))}
      </div>
    </Button>
  );
}

export default function Page() {
  const [selectValue, setSelectValue] = useState("example");
  const [SelectIcon, setSelectIcon] = useState<IconElement>(GitHubLogoIcon);
  const [isCollapse, setIsCollapse] = useState(false);

  const [activePane, setActivePane] = useState("all");
  const [messageList, setMessageList] = useState(MessageList);

  useEffect(() => {
    const find = emailList.find((item) => item.value === selectValue);
    const icon = find?.icon as IconElement;
    setSelectIcon(icon);
  }, [selectValue]);

  const onChangeTags = (value: string) => {
    setActivePane(value);
    if (value === "all") {
      setMessageList(MessageList);
    } else {
      setMessageList(MessageList.filter((item) => !item.isRead));
    }
  };

  const content = `Hi, let's have a meeting tomorrow to discuss the project. I've
              been reviewing the project details and have some ideas I'd like to
              share. It's crucial that we align on our next steps to ensure the
              project's success. Please come prepared with any questions or
              insights you may have. Looking forward to our meeting! Best
              regards, William`;

  return (
    <div className={`${mailStyle.mailWrapper} border rounded-lg`}>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel
          collapsible={true}
          collapsedSize={4}
          onCollapse={() => setIsCollapse(true)}
          onExpand={() => setIsCollapse(false)}
          defaultSize={30}
          minSize={20}
          maxSize={80}
          className={clsx({ "transition-all duration-300": isCollapse })}
        >
          <div>
            <div className='p-2 border-b'>
              <Select onValueChange={(value) => setSelectValue(value)}>
                <SelectTrigger>
                  <div className='flex items-center gap-2'>
                    <SelectIcon></SelectIcon>
                    <span className={clsx({ hidden: isCollapse })}>
                      Alicia Koch
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {emailList.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      <div className='flex items-center'>
                        <item.icon className='mr-2'></item.icon>
                        {item.title}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className=''>
              <div className='p-2 border-b space-y-1'>
                {InboxList.map((item) => (
                  <AsideItem
                    key={item.title}
                    menu={item}
                    isCollapse={isCollapse}
                  ></AsideItem>
                ))}
              </div>
              <div className='p-2'>
                {SocialList.map((item) => (
                  <AsideItem
                    key={item.title}
                    menu={item}
                    isCollapse={isCollapse}
                  ></AsideItem>
                ))}
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle></ResizableHandle>
        <ResizablePanel defaultSize={50} minSize={20} maxSize={80}>
          <Tabs
            defaultValue='all'
            onValueChange={onChangeTags}
            className='h-full flex flex-col'
          >
            <div className='p-2 px-4 flex justify-between items-center border-b'>
              <div className='text-xl font-bold'>Inbox</div>
              <TabsList className='inline-flex'>
                <TabsTrigger value='all'>All mail</TabsTrigger>
                <TabsTrigger value='unread'>Unread</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent
              value={activePane}
              className='mt-0 flex-1 flex flex-col gap-4 overflow-hidden'
            >
              <div className='px-4 pt-4'>
                <div className='relative'>
                  <Input className='px-3 pl-8' placeholder='Search...'></Input>
                  <MagnifyingGlassIcon className='absolute top-2 left-2 w-5 h-5 text-muted-foreground'></MagnifyingGlassIcon>
                </div>
              </div>
              <ScrollArea className='w-[200] flex-1'>
                <div className='flex flex-col gap-2 px-4'>
                  {messageList.map((item, index) => (
                    <Message key={index} message={item}></Message>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle withHandle></ResizableHandle>
        <ResizablePanel defaultSize={50} minSize={20} maxSize={80}>
          <div className='flex flex-col h-full'>
            <div className='flex justify-between p-2 border-b'>
              <div className='flex items-center gap-2'>
                {ToolbarLeftList.map((item, index) => {
                  return index === ToolbarLeftList.length - 1 ? (
                    <>
                      <Separator
                        orientation='vertical'
                        className='h-[80%]'
                      ></Separator>
                      <ToolbarItem key={index} menu={item}></ToolbarItem>
                    </>
                  ) : (
                    <ToolbarItem key={index} menu={item}></ToolbarItem>
                  );
                })}
              </div>
              <div className='flex items-center gap-2'>
                {ToolbarRightList.map((item, index) => (
                  <ToolbarItem key={index} menu={item}></ToolbarItem>
                ))}
                <Separator
                  orientation='vertical'
                  className='h-[80%]'
                ></Separator>
                <Popover>
                  <PopoverTrigger>
                    <Button variant='ghost' size='icon' className='w-9 h-9'>
                      <DotsVerticalIcon className='w-4 h-4'></DotsVerticalIcon>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align='end' className='p-1 w-auto'>
                    <Command>
                      <CommandList>
                        <CommandItem>Mark as unread</CommandItem>
                        <CommandItem>Star thread</CommandItem>
                        <CommandItem>Add label</CommandItem>
                        <CommandItem>Mute thread</CommandItem>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className='flex items-start p-4 border-b'>
              <div className='flex gap-2'>
                <div className='w-10 h-10 rounded-[50%] flex justify-center items-center text-sm bg-muted'>
                  WS
                </div>
                <div className='grid gap-1 text-xs'>
                  <div className='text-sm font-bold'>William Smith</div>
                  <div>Meeting Tomorrow</div>
                  <div>Reply-To: williamsmith@example.com</div>
                </div>
              </div>
              <div className='ml-auto text-xs'>Oct 22, 2023, 9:00:00 AM</div>
            </div>
            <div className='flex-1 p-4 whitespace-pre-wrap text-sm border-b'>
              {content}
            </div>
            <div className='p-4'>
              <Textarea placeholder='Reply William Smith...'></Textarea>
              <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center space-x-2'>
                  <Switch id='MuteThread'></Switch>
                  <Label htmlFor='MuteThread' className='text-xs'>
                    Mute this thread
                  </Label>
                </div>
                <Button>Send</Button>
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
