"use client"

import React, { useState } from "react"
import Card from "../../../components/DashboardRoot/Card"
import {
  IconUsers01,
  IconCoinsHand,
  IconCalendar,
  IconMessageTextSquare01
} from "@repo/ui/ungrouped-icons"
import {
  IconCheckCircleFilled,
  IconChevronRightOutline,
  IconInfoCircleFilled,
  IconInfoCircleOutline,
  IconMultipyOutline,
  IconPencilOutline,
  IconPreviousOutline
} from "@repo/ui/rayna-icons"
import { cn } from "@repo/ui/ui-utils"
import ListItem from "../../../components/DashboardRoot/ListItem"
import CardHeading from "../../../components/DashboardRoot/CardHeading"
import { Button, IconButton } from "@repo/ui/components"
import ProgressBar from "../../../components/DashboardRoot/ProgressBar"
import Image from "next/image"
import BannerImage from "/public/assets/banner.png"
import DataLess from "../../../components/DashboardRoot/DataLess"
import Modal from "../../../components/DashboardRoot/Modal"
import GradientSection from "../../../components/DashboardRoot/GradientSection"
import ExcelIcon from "../../../public/assets/Excel.png"
import SpreadSheetIcon from "../../../public/assets/Spreadsheet.png"
import ServiceIcon from "../../../public/assets/Service.png"
import DocumentIcon from "../../../public/assets/CSV_Document.png"
import SecondaryModalHeading from "../../../components/DashboardRoot/SecondaryModalHeading"

const DigestPerformance = [
  {
    title: "Total send",
    tooltip: "",
    value: "0"
  },
  {
    title: "Audience",
    tooltip: "",
    value: "0"
  },
  {
    title: "Opens",
    tooltip: "",
    value: "0.00%"
  },
  {
    title: "Net Sales",
    tooltip: "",
    value: "0"
  }
]

const AddContacts: React.FC<{
  close: () => void
  next: () => void
}> = ({ close, next }) => {
  const [isUploading, setIsUploading] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(40)

  const [uploadedProgress, setUploadedBytes] = useState(0)
  const [uploadedFileSize, setUploadedFileSize] = useState("")

  const cancelUpload = () => {
    setIsUploading(false)
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + " B"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + " KB"
    else return (bytes / 1048576).toFixed(2) + " MB"
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (
      file &&
      file.type ===
        "application.vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setUploadedFileSize(formatFileSize(file.size))
      setIsUploading(true)
      let progress = 0
      const interval = setInterval(() => {
        progress += 10
        if (progress >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          setIsUploaded(true)
        }
        setUploadProgress(progress)
      }, 1000)
    }
  }

  return (
    <div className="flex flex-col gap-y-32">
      <div>
        <GradientSection
          title="Import contacts from a file"
          text="All .csv or xlsx, .xls are supported"
          icons={[ExcelIcon]}>
          {/* TODO will work on this */}
          <label className="font-body min-w-[95px] flex items-center justify-center text-center cursor-pointer group ease-out duration-500 rounded-md text-sm font-semibold leading-5 px-2.5 py-1.5 h-8 hover:shadow-[0_1px_2px_0_rgba(0,0,0,0.0.5)] focus-visible:outline active:outline focus-visible:outline-offset-2 focus-visible:outline-brand-100 focus-visible:outline-2 active:outline-offset-2 active:outline-brand-100 active:outline-2 disabled:text-neutral-400 disabled:outline-none disabled:border-none disabled:shadow-none bg-transparent hover:bg-neutral-50 active:bg-transparent focus-visible:bg-transparent active:border focus-visible:border active:border-brand-600 active:border-solid focus-visible:border-brand-600 focus-visible:border-solid text-brand-600 disabled:bg-transparent">
            <span>Click to upload</span>
            <input
              name="contacts"
              type="file"
              className="sr-only"
              onChange={handleFileUpload}
            />
          </label>
        </GradientSection>
        {!isUploading && !isUploaded && (
          <>
            <div
              role="alert"
              className="flex items-center gap-x-2 text-gray-600 mt-3">
              <IconInfoCircleFilled
                width={24}
                height={24}></IconInfoCircleFilled>
              <div className="text-sm">
                Don’t have a ready file? Start with our{" "}
              </div>
              <Button
                variant="primary"
                size="xl"
                variantType="ghost"
                className="inline-flex p-0 font-normal text-sm h-auto">
                sample template
              </Button>
            </div>
            <GradientSection
              title="Import from another service"
              text="airtable and google sheet are supported"
              className="mt-8"
              icons={[ServiceIcon, SpreadSheetIcon]}>
              {/* TODO will work on this */}
              <Button
                variant="primary"
                variantType="ghost"
                size="md"
                onClick={() => {
                  setIsUploading(true)
                }}>
                Connect to a service
              </Button>
            </GradientSection>
          </>
        )}

        {(isUploading || isUploaded) && (
          <>
            <div
              role="status"
              className="p-3 rounded-xl border border-gray-200 mt-10">
              <div className="relative">
                <div className="flex justify-between items-center gap-y-3">
                  <div className="flex gap-x-3 items-center flex-auto">
                    <Image
                      src={DocumentIcon.src}
                      width={40}
                      height={40}
                      alt="Icon"
                      aria-hidden="true"
                      className="aspect-square"></Image>
                    <div className="flex-auto">
                      <div className="text-sm">
                        Tech design requirements.pdf
                      </div>
                      <div className="text-xs">
                        <div className="flex items-baseline gap-x-1 text-gray-500">
                          <div>
                            {isUploading && (
                              <>
                                <span>{uploadedProgress}</span> of{" "}
                              </>
                            )}
                            <span>{uploadedFileSize}</span>
                          </div>
                          <span>.</span>
                          {isUploading && <span>Uploading...</span>}
                          {isUploaded && (
                            <div className="flex gap-x-3">
                              <IconCheckCircleFilled className="text-green-500"></IconCheckCircleFilled>
                              <span>Completed</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {isUploading && (
                        <div className="mt-1">
                          <ProgressBar value={uploadProgress}></ProgressBar>
                        </div>
                      )}
                    </div>
                  </div>
                  {isUploaded && (
                    <IconButton
                      variant="secondary"
                      variantType="ghost"
                      size="sm"
                      className="absolute top-0 right-0"
                      onClick={() => {
                        cancelUpload()
                      }}>
                      <IconMultipyOutline></IconMultipyOutline>
                    </IconButton>
                  )}
                </div>
                {isUploading && (
                  <IconButton
                    variant="secondary"
                    variantType="ghost"
                    size="sm"
                    className="absolute top-0 right-0">
                    <IconMultipyOutline
                      onClick={() => {
                        cancelUpload()
                      }}></IconMultipyOutline>
                  </IconButton>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      {(isUploading || isUploaded) && (
        <div>
          <div className="flex justify-end gap-x-3">
            <Button
              variant="primary"
              variantType="contained"
              disabled={!isUploaded}
              className="rounded-full font-normal"
              onClick={() => {
                next()
              }}>
              Continue to organise
            </Button>
            <Button
              variant="secondary"
              variantType="outlined"
              onClick={() => {
                close()
              }}
              className="rounded-full font-normal">
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

const OrganiseContacts: React.FC<{
  prev: () => void
  next: () => void
}> = ({ prev, next }) => {
  const lists = [
    {
      variant: "secondary",
      variantType: "ghost",
      value: "New comers"
    },
    {
      variant: "secondary",
      variantType: "ghost",
      value: "Church workers"
    },
    {
      variant: "secondary",
      variantType: "ghost",
      value: "TTC Choir"
    }
  ]

  return (
    <main>
      <div role="form" className="grid grid-cols-1 gap-y-6">
        <div className="col-span-full">
          <div className="block text-sm text-gray-600 font-medium">
            Select a list <sup className="text-brand-600">*</sup>
          </div>
          <div className="mt-1">
            <input
              type="text"
              id="list"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-600 placeholder:text-gray-500"></input>
          </div>
        </div>
      </div>
    </main>
  )
}
interface AddContactsModalInterface {
  title: string
  render: React.JSX.Element
  text?: string
}

const OnboardingView = () => {
  // TODO will read from API
  const progress = 30

  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  const Steps = [
    {
      title: "Add your contacts",
      text: "Build your audience by adding your existing contacts",
      done: false,
      icon: IconUsers01,
      onclick: () => {
        openModal()
      }
    },
    {
      title: "Setup your givings",
      text: "Create offerings and donations to give towards",
      done: false,
      icon: IconCoinsHand
    },
    {
      title: "Setup your recurring activities",
      text: "Create events to share with your audience",
      done: false,
      icon: IconCalendar
    },
    {
      title: "Create your first digest",
      text: "Get things started, create your first digest",
      done: false,
      icon: IconMessageTextSquare01
    }
  ]

  const [currentContactIndex, setCurrentContactIndex] = useState(0)

  const nextContactStep = () => setCurrentContactIndex(currentContactIndex + 1)

  const prevContactStep = () => setCurrentContactIndex(currentContactIndex - 1)

  const contactModalSteps: AddContactsModalInterface[] = [
    {
      title: "How would you like to add contacts?",
      render: (
        <AddContacts close={closeModal} next={nextContactStep}></AddContacts>
      )
    },
    {
      title: "Organise your contact",
      render: (
        <OrganiseContacts
          prev={prevContactStep}
          next={nextContactStep}></OrganiseContacts>
      ),
      text: "Easily organize your contacts to make the most sense to you."
    }
  ]

  const currentStep = () =>
    contactModalSteps[currentContactIndex] as AddContactsModalInterface

  return (
    <>
      <div id="banner" className="max-w-screen-xl mx-auto" role="banner">
        <Image
          src={BannerImage.src}
          alt="Welcome"
          layout="responsive"
          height={BannerImage.height}
          width={BannerImage.width}
          objectFit="cover"></Image>
      </div>

      <div className="mt-10">
        <Card>
          <header>
            <div className="flex justify-between items-center">
              <CardHeading
                title="Recommended next steps"
                text="Complete these steps to get up and running!"></CardHeading>
              <div>
                <div className="flex gap-3 content-between items-center">
                  <div className="w-32">
                    <ProgressBar value={progress}></ProgressBar>
                  </div>
                  <span className="text-gray-600 text-sm">{progress}%</span>
                </div>
              </div>
            </div>
          </header>
          <main className="mt-4">
            <ul
              role="list"
              className="divide-y divide-gray-100"
              aria-labelledby="onboardingStepsTitle">
              {Steps.map((step) => {
                return (
                  <ListItem
                    clickable={true}
                    onClick={step.onclick}
                    key={step.title}>
                    <div className="flex min-w-0 gap-x-6 items-center">
                      <div>
                        <div className="rounded-lg flex justify-center items-center w-14 h-14 bg-gray-50 drop-shadow-sm">
                          <step.icon
                            height={28}
                            width={28}
                            className="text-brand-500"></step.icon>
                        </div>
                      </div>
                      <div className="min-w-0 flex-auto">
                        <div className="font-semibold leading-6 text-slate-900">
                          {step.title}
                        </div>
                        <p className="truncate text-sm text-gray-500 mt-1">
                          {step.text}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between gap-x-6 items-center">
                      <IconCheckCircleFilled
                        width={32}
                        height={32}
                        className={cn({
                          "text-gray-300": !step.done,
                          "text-gray-900": step.done
                        })}></IconCheckCircleFilled>
                      <IconChevronRightOutline
                        aria-hidden="true"
                        width={18}
                        height={18}
                        className="text-gray-300 group-hover:text-gray-500"></IconChevronRightOutline>
                    </div>
                  </ListItem>
                )
              })}
            </ul>
          </main>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <header>
            <CardHeading
              title="Overall digest performance"
              text="Once you send an email, data will show up here."></CardHeading>
          </header>
          <main className="my-8">
            <ul className="columns-4 gap-4">
              {DigestPerformance.map((sub, i) => {
                const title = "digestPerformanceTitle" + i
                return (
                  <li aria-labelledby={title}>
                    <div className="mb-3 flex gap-1 items-center">
                      <span className="text-gray-600 text-sm" id={title}>
                        {sub.title}
                      </span>
                      <IconButton
                        variantType="ghost"
                        variant="secondary"
                        size="xs">
                        <IconInfoCircleOutline
                          width={16}
                          height={16}></IconInfoCircleOutline>
                      </IconButton>
                    </div>
                    <div className="text-gray-400 text-4xl font-medium">
                      {sub.value}
                    </div>
                  </li>
                )
              })}
            </ul>
          </main>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <DataLess
            title="Your recent digests will appear here"
            text="Get started by creating your first digest."
            primaryButton={{
              icon: <IconPencilOutline></IconPencilOutline>,
              text: "Create a digest"
            }}></DataLess>
        </Card>
      </div>

      {showModal && (
        <Modal
          showTitle={currentContactIndex === 0}
          onClose={closeModal}
          title={currentStep().title}>
          {currentContactIndex !== 0} && (
          <>
            <IconButton
              variant="secondary"
              variantType="ghost"
              size="sm"
              className="absolute top-0 right-0">
              <IconPreviousOutline
                onClick={() => {
                  prevContactStep()
                }}></IconPreviousOutline>
            </IconButton>
            <SecondaryModalHeading
              text={currentStep().text || ""}
              title={currentStep().title}></SecondaryModalHeading>
          </>
          ){currentContactIndex == 0 && currentStep().render}
        </Modal>
      )}
    </>
  )
}

const ReturningUserView = () => {
  return <div></div>
}

const Home = () => {
  // TODO will get value from API
  const newUser = true

  return newUser ? (
    <OnboardingView></OnboardingView>
  ) : (
    <ReturningUserView></ReturningUserView>
  )
}

export default Home
