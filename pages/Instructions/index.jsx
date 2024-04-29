import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img, Radio, RadioGroup } from "../../components";

const data = [
  { rectangle: "images/img_rectangle_6.png" },
  { rectangle: "images/img_rectangle_5.png" },
  { rectangle: "images/img_rectangle_7.png" },
  { rectangle: "images/img_rectangle_6.png" },
];

export default function InstructionsPage() {
  return (
    <>
      <Helmet>
        <title>shopping cart</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* main content section */}
      <div className="flex w-full flex-col items-center bg-white-A700 py-[43px] md:py-5">
        {/* interactive elements section */}
        <div className="mt-[34px] flex w-[91%] items-start gap-[50px] md:w-full md:flex-col md:p-5">
          {/* image gallery section */}
          <div className="flex w-full flex-col items-end gap-[37px]">
            <div className="flex items-center self-stretch md:flex-col">
              <Button
                shape="round"
                className="mb-[143px] min-w-[37px] self-end font-khula font-bold !text-black-900_99"
              >
                6
              </Button>
              <Img
                src="images/img_rectangle_4.png"
                alt="image"
                className="h-[691px] w-[94%] rounded-[10px] object-cover md:w-full"
              />
            </div>

            {/* list of images section */}
            <div className="mr-[33px] flex w-[88%] gap-5 md:mr-0 md:w-full md:flex-row sm:flex-col">
              {data.map((d, index) => (
                <Img
                  key={"instructions" + index}
                  src="images/img_rectangle_6.png"
                  alt="rectangle"
                  className="h-[115px] w-[22%] rounded-md object-cover sm:w-full"
                />
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col gap-[18px]">
            {/* product details section */}
            <div className="flex flex-col items-start">
              {/* numeric buttons row section */}
              <div className="ml-[5px] self-stretch md:ml-0">
                <div className="flex items-center md:flex-col">
                  <div className="relative z-[1] flex w-[6%] flex-col gap-[19px] md:w-full">
                    <Button shape="round" className="w-full font-khula font-bold">
                      1
                    </Button>
                    <Button shape="round" className="w-full font-khula font-bold">
                      2
                    </Button>
                  </div>
                  <div className="relative ml-[-1px] flex flex-1 flex-col gap-[17px] self-end md:ml-0 md:self-stretch">
                    <div className="flex flex-col items-start gap-2.5">
                      <Text as="p" className="!font-normal !text-gray-400">
                        Marmeto
                      </Text>
                      <Heading size="lg" as="h1" className="!text-black-900">
                        Embrace Sideboard
                      </Heading>
                    </div>
                    <div className="h-px bg-gray-300" />
                  </div>
                </div>
              </div>

              {/* pricing and offers section */}
              <div className="mt-[18px] flex w-[52%] items-start gap-2.5 md:w-full">
                {/* price stack section */}
                <div className="relative h-[95px] flex-1">
                  <div className="absolute right-[0.00px] top-[0.00px] m-auto flex flex-col items-start gap-1">
                    <Heading size="xl" as="h2">
                      $12999.00
                    </Heading>
                    <Text size="md" as="p" className="!text-black-900_7f line-through">
                      $19999.00
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    className="absolute bottom-[-0.37px] left-[14.00px] m-auto min-w-[37px] font-khula font-bold"
                  >
                    4
                  </Button>
                  <Button
                    shape="round"
                    className="absolute left-[0.00px] top-[8.37px] m-auto min-w-[37px] font-khula font-bold"
                  >
                    3
                  </Button>
                </div>

                {/* offer stack section */}
                <div className="relative mt-[7px] h-[54px] w-[28%]">
                  <Text size="md" as="p" className="absolute right-[0.00px] top-[0.00px] m-auto !text-red-A700_7f">
                    35% Off
                  </Text>
                  <Button
                    shape="round"
                    className="absolute bottom-[-0.89px] left-[0.00px] m-auto min-w-[37px] font-khula font-bold"
                  >
                    5
                  </Button>
                </div>
              </div>

              {/* color selection section */}
              <div className="mt-4 flex w-[53%] items-center gap-1 md:w-full">
                <Button shape="round" className="mb-3.5 min-w-[37px] self-end font-khula font-bold">
                  8
                </Button>

                {/* color options column section */}
                <div className="flex flex-1 flex-col items-start gap-3">
                  <Text as="p">Choose a Color</Text>

                  {/* color indicators row section */}
                  <div className="flex gap-3 self-stretch">
                    <Img src="images/img_checkmark.svg" alt="checkmark" className="h-[64px] w-[64px]" />
                    <Img src="images/img_close.svg" alt="close" className="h-[64px] w-[64px]" />
                    <Img src="images/img_settings.svg" alt="settings" className="h-[64px] w-[64px]" />
                    <Img src="images/img_close_light_green_100.svg" alt="close" className="h-[64px] w-[64px]" />
                  </div>
                </div>
              </div>

              {/* section divider line */}
              <div className="mt-[30px] h-px w-[93%] self-end bg-gray-300" />
            </div>

            {/* size selection section */}
            <div className="flex flex-col gap-7">
              {/* size buttons row section */}
              <div className="ml-1.5 flex w-[87%] items-center gap-[18px] md:ml-0 md:w-full sm:flex-col">
                <Button shape="round" className="min-w-[37px] self-end font-khula font-bold">
                  9
                </Button>

                {/* size options column section */}
                <div className="flex flex-1 flex-col items-start gap-[13px] sm:self-stretch">
                  <Text as="p">Choose a Size</Text>

                  {/* size radio group section */}
                  <RadioGroup name="chooseasize" className="flex self-stretch">
                    <Radio
                      value="small"
                      label="Small"
                      className="flex-1 gap-2 rounded-lg bg-blue_gray-50 py-[7px] pr-2.5 text-sm font-medium text-indigo-800"
                    />
                    <Radio
                      value="medium"
                      label="Medium"
                      className="ml-[11px] w-[20%] gap-2 rounded-lg bg-gray-100 py-[7px] pr-2.5 text-sm font-medium text-gray-600"
                    />
                    <Radio
                      value="large"
                      label="Large"
                      className="ml-[11px] flex-1 gap-2 rounded-lg bg-gray-100 py-[7px] pr-2.5 text-sm font-medium text-gray-600"
                    />
                    <Radio
                      value="extralarge"
                      label="Extra Large"
                      className="ml-[11px] w-[25%] gap-2 rounded-lg bg-gray-100 py-[7px] pr-2.5 text-sm font-medium text-gray-600"
                    />
                    <Radio
                      value="xxl"
                      label="XXL"
                      className="ml-[11px] flex-1 gap-2 rounded-lg bg-gray-100 py-[7px] pr-2.5 text-sm font-medium text-gray-600"
                    />
                  </RadioGroup>
                </div>
              </div>

              {/* quantity and cart section */}
              <div className="ml-[5px] md:ml-0">
                {/* quantity selection column section */}
                <div className="flex flex-col items-start gap-[31px]">
                  {/* quantity buttons row section */}
                  <div className="flex w-[87%] items-center gap-[19px] md:w-full sm:flex-col">
                    <Heading
                      size="xs"
                      as="h3"
                      className="mb-[13px] flex h-[36px] w-[37px] items-center justify-center self-end rounded-[18px] bg-blue_gray-100 py-[5px] pl-3.5 pr-[5px] !font-khula !text-black-900"
                    >
                      10
                    </Heading>
                    <div className="flex flex-1 flex-col items-start sm:self-stretch">
                      <Button
                        shape="round"
                        className="relative z-[2] ml-[198px] min-w-[37px] font-khula font-bold md:ml-0"
                      >
                        11
                      </Button>

                      {/* add to cart row section */}
                      <div className="relative mt-[-21px] flex gap-[19px] self-stretch sm:flex-col">
                        <div className="flex w-[35%] flex-wrap items-center justify-between gap-5 rounded-[29px] bg-gray-100 p-[15px] sm:w-full">
                          <Heading as="h4" className="ml-[11px] !text-gray-500 md:ml-0">
                            -
                          </Heading>
                          <Heading size="md" as="h5">
                            1
                          </Heading>
                          <Heading as="h6" className="mr-[9px] md:mr-0">
                            +
                          </Heading>
                        </div>
                        <Button
                          color="indigo_800"
                          size="md"
                          leftIcon={<Img src="images/img_frame.svg" alt="frame" className="h-[21px] w-[21px]" />}
                          className="min-w-[309px] gap-2.5 rounded-[29px] font-semibold sm:px-5"
                        >
                          Add To Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="h-px w-[91%] self-end bg-gray-300" />
                </div>
              </div>

              {/* product description section */}
              <div className="flex items-start gap-[19px] md:flex-col">
                <Heading
                  size="xs"
                  as="h6"
                  className="flex h-[36px] w-[37px] items-center justify-center rounded-[18px] bg-blue_gray-100 py-[5px] pl-3.5 pr-[5px] !font-khula !text-black-900"
                >
                  12
                </Heading>
                <Text size="s" as="p" className="w-[94%] leading-7 !text-gray-500 md:w-full">
                  The Embrace Sideboard is a stylish wear. With a top cloth designed to provide superior protection and
                  look great, this storage solution is both functional and attractive. It fits seamlessly into any home
                  decor, with clean lines and a timeless look. Crafted from premium materials for a combination of
                  style, durability, and reliability.
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* footer button section */}
        <div className="container-xs mb-[5px] flex flex-col items-start md:p-5">
          <Button shape="round" className="min-w-[37px] font-khula font-bold">
            7
          </Button>
        </div>
      </div>
    </>
  );
}
