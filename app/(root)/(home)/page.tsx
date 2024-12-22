"use client";

import {
  CircleAlertIcon,
  DoorOpenIcon,
  Download,
  LucideLock,
  UsersRoundIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <div className="relative flex size-full max-w-7xl flex-col space-y-14 bg-p2 px-6 py-12 backdrop:blur-lg lg:space-y-32 lg:px-24 xl:px-36">
        <div className="mb-5 mt-10 flex flex-col items-center justify-center">
          <h1 className="mx-auto flex text-balance text-center font-Ubuntu text-4xl font-semibold tracking-tight text-slate-800 dark:text-slate-200 sm:text-balance md:text-5xl lg:mt-5">
            <span className="xl:inline">
              All In One
              <span className="text-p1/85"> Open Source</span> Messenger App.
            </span>
          </h1>
          <p className="mx-auto mt-3 text-balance text-center font-Ubuntu text-base text-slate-500 dark:text-slate-400 sm:text-balance sm:text-lg lg:mt-5">
            You Have All You&apos;r Favorite Feature&apos;s You Ever Need In One
            App.{" "}
            <span className="underline decoration-p1 underline-offset-4">
              You End-To-End Encryption
            </span>
            {""} All Privacy Settings You Ever Need In Your Life.
          </p>
          <div className="mx-auto mt-6 flex w-full flex-col justify-center gap-y-5 md:flex-row md:gap-x-5">
            <Button
              size={"lg"}
              variant={"default"}
              className="select-none rounded-full p-7 text-lg"
            >
              <Download /> Download
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className="select-none rounded-full bg-p1/85 p-7 text-lg hover:bg-p1 hover:text-slate-900"
            >
              <DoorOpenIcon /> Open In Your Browser
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-5 py-20">
          <h1 className="flex items-center text-balance font-Ubuntu text-4xl text-p1">
            {" "}
            <LucideLock className="mx-4 size-9" /> End-To-End Encryption
          </h1>
          <p className="mx-auto mt-3 text-balance text-center font-Ubuntu text-base text-slate-500 dark:text-slate-400 sm:text-balance sm:text-lg lg:mt-5">
            With end-to-end encryption,{" "}
            <span className="underline decoration-p1 underline-offset-4">
              your personal messages and calls are secured.
            </span>{" "}
            Only you and the person you&apos;re talking to can read or listen to
            them, and nobody in between, not even MessengerCraft can&apos;t view
            it. But if you&apos;r message get reported it will be seen by safety
            team.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-5 md:items-end">
          <h1 className="flex items-center text-balance font-Ubuntu text-4xl text-p1">
            {" "}
            <UsersRoundIcon className="mx-4 size-9" /> Groups And Channels
          </h1>
          <p className="mt-3 text-balance text-center font-Ubuntu text-base text-slate-500 dark:text-slate-400 sm:mx-auto sm:text-balance sm:text-lg md:mx-0 md:w-[770px] md:text-end lg:mt-5">
            With groups and channels, you have more fun than ever. With Groups
            you can chat, call, etc with you&apos;r friends, family members etc.
            And with Channels you can make it public or private invite
            people&apos;s you know or let others discover you&apos;r channel
            <span className="underline decoration-p1 underline-offset-4">
              {" "}
              without letting them see you&apos;r private details.
            </span>{" "}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-5 md:items-start">
          <h1 className="flex items-center text-balance font-Ubuntu text-4xl text-destructive/85">
            {" "}
            <CircleAlertIcon className="mr-2 size-9" /> Moderation And Safety
          </h1>
          <p className="mt-3 text-balance text-center font-Ubuntu text-base text-slate-500 dark:text-slate-400 sm:mx-auto sm:text-balance sm:text-lg md:mx-0 md:w-[770px] md:text-start lg:mt-5">
            To maintain good ecosystem oru automated system may check you&apos;r
            message, photo, video etc.
            <span className="underline decoration-destructive/85 underline-offset-4">
              {""} If we found any illegal activities then we will report it to
              proper authority&apos;s
            </span>
            {""} and ban you&apos;r account and will need proper proof for an
            appeal
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-5 py-20">
          <p className="font-Ubuntu text-base font-bold uppercase text-p3/85">
            get satisfy continuously
          </p>
          <h1 className="text-center text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">
            Connect effortlessly. Converse seamlessly. Your world of
            conversations, unified.
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-center text-xl text-slate-500 dark:text-slate-300 sm:mt-4">
            Chat, call, video call, group and channel calls, events with family
            or friends in one place
          </p>
        </div>
        <div className="mx-auto flex flex-row items-center justify-center py-24"></div>
      </div>
    </>
  );
};

export default Home;
