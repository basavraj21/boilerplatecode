import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Radio, RadioGroup } from "../../components";

const data = [
  { rectangle: "images/img_rectangle_6.png" },
  { rectangle: "images/img_rectangle_5.png" },
  { rectangle: "images/img_rectangle_7.png" },
  { rectangle: "images/img_rectangle_6.png" },
];

export default function OnclickofAddtoCartPage() {
  return (
    <>
      <Helmet>
        <title>shopping cart</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* add to cart modal section */}
      <div className="relative h-[1024px] w-full bg-white-A700 py-20 md:py-5">
        {/* product overview section */}
        <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max justify-center md:p-5">
          {/* product images and details section */}
          <div className="flex w-full items-start justify-between gap-5 md:flex-col">
            {/* product images section */}
            <div className="flex w-[46%] flex-col items-center gap-[37px] md:w-full">
              <Img
                src="images/img_rectangle_4.png"
                alt="image"
                className="h-[691px] w-full rounded-[10px] object-cover md:h-auto"
              />

              {/* product thumbnail list section */}
              <div className="flex w-[89%] gap-5 md:w-full md:flex-row sm:flex-col">
                {data.map((d, index) => (
                  <Img
                    key={"listrectangle" + index}
                    src="images/img_rectangle_6.png"
                    alt="rectangle"
                    className="h-[115px] w-[22%] rounded-md object-cover sm:w-full"
                  />
                ))}
              </div>
            </div>

            {/* product description and options section */}
            <div className="mt-[5px] flex w-[46%] flex-col items-start md:w-full">
              {/* product title section */}
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="!font-normal !text-gray-400">
                  Marmeto
                </Text>
                <Heading size="lg" as="h1" className="!text-black-900">
                  Embrace Sideboard
                </Heading>
              </div>
              <div className="mt-[17px] h-px self-stretch bg-gray-300" />

              {/* product pricing section */}
              <div className="mt-[18px] flex items-start gap-[17px]">
                <div className="flex flex-col items-start gap-1">
                  <Heading size="xl" as="h2">
                    $12999.00
                  </Heading>
                  <Text size="md" as="p" className="!text-black-900_7f line-through">
                    $19999.00
                  </Text>
                </div>
                <Text size="md" as="p" className="mt-[7px] !text-red-A700_7f">
                  35% Off
                </Text>
              </div>
              <div className="mt-[9px] h-px self-stretch bg-gray-300" />
              <Text as="p" className="mt-7">
                Choose a Color
              </Text>

              {/* product color options section */}
              <div className="mt-3 flex w-[50%] gap-3 md:w-full">
                <Img src="images/img_checkmark.svg" alt="checkmark" className="h-[64px] w-[64px]" />
                <Img src="images/img_close.svg" alt="close" className="h-[64px] w-[64px]" />
                <Img src="images/img_settings.svg" alt="settings" className="h-[64px] w-[64px]" />
                <Img src="images/img_close_light_green_100.svg" alt="close" className="h-[64px] w-[64px]" />
              </div>
              <div className="mt-[30px] h-px self-stretch bg-gray-300" />

              {/* product size options section */}
              <div className="mt-[18px] flex w-[85%] flex-col items-start gap-[13px] md:w-full">
                <Text as="p">Choose a Size</Text>
                <RadioGroup name="chooseasize2" className="flex self-stretch">
                  <Radio
                    value="small2"
                    label="Small"
                    className="flex-1 gap-2 rounded-lg bg-blue_gray-50 py-[7px] pr-2.5 text-sm font-medium text-indigo-800"
                  />
                  <Radio
                    value="medium2"
                    label="Medium"
                    className="ml-[11px] w-[20%] gap-2 rounded-lg bg-gray-100 py-[7px] pr-2.5 text-sm font-medium text-gray-600"
                  />
                  <Radio
                    value="large2"
                    label="Large"
                    className="ml-[11px] flex-1 gap-2 rounded-lg bg-gray-100 py-[7px] pr-2.5 text-sm font-medium text-gray-600"
                  />
                  <Radio
                    value="extralarge2"
                    label="Extra Large"
                    className="ml-[11px] w-[25%] gap-2 rounded-lg bg-gray-100 py-[7px] pr-2.5 text-sm font-medium text-gray-600"
                  />
                  <Radio
                    value="xxl2"
                    label="XXL"
                    className="ml-[11px] flex-1 gap-2 rounded-lg bg-gray-100 py-[7px] pr-2.5 text-sm font-medium text-gray-600"
                  />
                </RadioGroup>
              </div>

              {/* product quantity and add to cart section */}
              <div className="mt-10 flex w-[85%] gap-[19px] md:w-full sm:flex-col">
                <div className="flex w-[35%] flex-wrap items-center justify-between gap-5 rounded-[29px] bg-gray-100 p-[15px] sm:w-full">
                  <Heading as="h3" className="ml-[11px] !text-gray-500 md:ml-0">
                    -
                  </Heading>
                  <Heading size="md" as="h4">
                    1
                  </Heading>
                  <Heading as="h5" className="mr-[9px] md:mr-0">
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
              <Button color="lime_100" size="xs" className="mt-[23px] min-w-[495px] rounded-lg font-semibold sm:pl-5">
                Embrace Sideboard with Color Yellow and Size Small added to cart
              </Button>
              <div className="mt-[17px] h-px self-stretch bg-gray-300" />
            </div>
          </div>
        </div>

        {/* product additional description section */}
        <Text size="s" as="p" className="absolute bottom-[8%] right-[8%] m-auto w-[39%] leading-7 !text-gray-500">
          The Embrace Sideboard is a stylish wear. With a top cloth designed to provide superior protection and look
          great, this storage solution is both functional and attractive. It fits seamlessly into any home decor, with
          clean lines and a timeless look. Crafted from premium materials for a combination of style, durability, and
          reliability.
        </Text>
      </div>
    </>
  );
}
