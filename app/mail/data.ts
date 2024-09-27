import {
  GitHubLogoIcon,
  ModulzLogoIcon,
  CodeSandboxLogoIcon,
} from "@radix-ui/react-icons";

export interface IconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
}

export type IconElement = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<SVGSVGElement>
>;

export interface IMenuItem {
  title: string;
  icon: IconElement;
  number?: string;
  active?: boolean;
}

export const emailList = [
  { title: "alicia@example.com", icon: GitHubLogoIcon, value: "example" },
  { title: "alicia@gmail.com", icon: ModulzLogoIcon, value: "gmail" },
  { title: "alicia@me.com", icon: CodeSandboxLogoIcon, value: "me" },
];

export const InboxList: IMenuItem[] = [
  { title: "Inbox", icon: GitHubLogoIcon, number: "128", active: true },
  { title: "Drafts", icon: GitHubLogoIcon, number: "128" },
  { title: "Sent", icon: GitHubLogoIcon, number: "128" },
  { title: "Junk", icon: GitHubLogoIcon, number: "128" },
];

export const SocialList: IMenuItem[] = [
  { title: "Social", icon: GitHubLogoIcon, number: "128" },
  { title: "Updates", icon: GitHubLogoIcon, number: "128" },
  { title: "Forums", icon: GitHubLogoIcon, number: "128" },
  { title: "Shopping", icon: GitHubLogoIcon, number: "128" },
  { title: "Promotions", icon: GitHubLogoIcon, number: "128" },
];

export interface ITagItem {
  title: string;
  active?: boolean;
}

export interface IMessageItem {
  title: string;
  subtitle: string;
  time: string;
  desc: string;
  tag: ITagItem[];
  isRead: boolean;
}

export const MessageList: IMessageItem[] = [
  {
    title: "William Smith",
    subtitle: "Meeting Tomorrow",
    time: "11 months ago",
    desc: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to",
    tag: [
      { title: "meeting", active: true },
      { title: "work" },
      { title: "important" },
    ],
    isRead: true,
  },
  {
    title: "Alice Smith",
    subtitle: "Meeting Tomorrow",
    time: "11 months ago",
    desc: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to",
    tag: [
      { title: "meeting", active: true },
      { title: "work" },
      { title: "important" },
    ],
    isRead: false,
  },
  {
    title: "Bob Johnson",
    subtitle: "Meeting Tomorrow",
    time: "11 months ago",
    desc: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to",
    tag: [
      { title: "meeting", active: true },
      { title: "work" },
      { title: "important" },
    ],
    isRead: true,
  },
  {
    title: "William Smith",
    subtitle: "Meeting Tomorrow",
    time: "11 months ago",
    desc: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to",
    tag: [
      { title: "meeting", active: true },
      { title: "work" },
      { title: "important" },
    ],
    isRead: true,
  },
  {
    title: "William Smith",
    subtitle: "Meeting Tomorrow",
    time: "11 months ago",
    desc: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to",
    tag: [
      { title: "meeting", active: true },
      { title: "work" },
      { title: "important" },
    ],
    isRead: false,
  },
  {
    title: "William Smith",
    subtitle: "Meeting Tomorrow",
    time: "11 months ago",
    desc: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to",
    tag: [
      { title: "meeting", active: true },
      { title: "work" },
      { title: "important" },
    ],
    isRead: false,
  },
  {
    title: "William Smith",
    subtitle: "Meeting Tomorrow",
    time: "11 months ago",
    desc: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to",
    tag: [
      { title: "meeting", active: true },
      { title: "work" },
      { title: "important" },
    ],
    isRead: false,
  },
  {
    title: "William Smith",
    subtitle: "Meeting Tomorrow",
    time: "11 months ago",
    desc: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to",
    tag: [
      { title: "meeting", active: true },
      { title: "work" },
      { title: "important" },
    ],
    isRead: false,
  },
  {
    title: "William Smith",
    subtitle: "Meeting Tomorrow",
    time: "11 months ago",
    desc: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to",
    tag: [
      { title: "meeting", active: true },
      { title: "work" },
      { title: "important" },
    ],
    isRead: false,
  },
  {
    title: "William Smith",
    subtitle: "Meeting Tomorrow",
    time: "11 months ago",
    desc: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to",
    tag: [
      { title: "meeting", active: true },
      { title: "work" },
      { title: "important" },
    ],
    isRead: false,
  },
  {
    title: "William Smith",
    subtitle: "Meeting Tomorrow",
    time: "11 months ago",
    desc: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to",
    tag: [
      { title: "meeting", active: true },
      { title: "work" },
      { title: "important" },
    ],
    isRead: false,
  },
  {
    title: "William Smith",
    subtitle: "Meeting Tomorrow",
    time: "11 months ago",
    desc: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success. Please come prepared with any questions or insights you may have. Looking forward to",
    tag: [
      { title: "meeting", active: true },
      { title: "work" },
      { title: "important" },
    ],
    isRead: false,
  },
];

export const ToolbarLeftList: IMenuItem[] = [
  { title: "Archive", icon: GitHubLogoIcon },
  { title: "Move to junk", icon: GitHubLogoIcon },
  { title: "Move to trash", icon: GitHubLogoIcon },
  { title: "Snooze", icon: GitHubLogoIcon },
];

export const ToolbarRightList: IMenuItem[] = [
  { title: "Reply", icon: GitHubLogoIcon },
  { title: "Reply all", icon: GitHubLogoIcon },
  { title: "Forward", icon: GitHubLogoIcon },
];
