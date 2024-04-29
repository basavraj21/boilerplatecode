import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Radio, RadioGroup } from "../../components";

const data = [
  { rectangle: "images/img_rectangle_6.png" },
  { rectangle: "images/img_rectangle_5.png" },
  { rectangle: "images/img_rectangle_7.png" },
  { rectangle: "images/img_rectangle_6.png" },
];

export default function DefaultDesignPage() {
  return (
    <>
      <Helmet>
        <title>shopping cart</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      {/* product overview section */}
      <div className="flex w-full justify-center bg-white-A700 py-20 md:py-5">
        {/* product images section */}
        <div className="container-xs mb-[21px] flex justify-center md:p-5">
          {/* product details section */}
          <div className="flex w-full items-center justify-between gap-5 md:flex-col">
            {/* product image gallery section */}
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
                    key={"defaultdesign" + index}
                    src="images/img_rectangle_6.png"
                    alt="rectangle"
                    className="h-[115px] w-[22%] rounded-md object-cover sm:w-full"
                  />
                ))}
              </div>
            </div>

            {/* product description section */}
            <div className="flex w-[46%] flex-col items-start md:w-full">
              {/* product title block section */}
              <div className="flex flex-col items-start gap-2.5">
                <Text as="p" className="!font-normal !text-gray-400">
                  Marmeto
                </Text>
                <Heading size="lg" as="h1" className="!text-black-900">
                  Embrace Sideboard
                </Heading>
              </div>
              <div className="ml-[5px] mt-[17px] h-px self-stretch bg-gray-300 md:ml-0" />

              {/* product pricing block section */}
              <div className="ml-[5px] mt-[18px] flex items-start gap-[17px] md:ml-0">
                {/* product price details section */}
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
              <div className="ml-[5px] mt-[9px] h-px self-stretch bg-gray-300 md:ml-0" />
              <Text as="p" className="ml-[5px] mt-7 md:ml-0">
                Choose a Color
              </Text>

              {/* product color options section */}
              <div className="ml-[5px] mt-3 flex w-[50%] gap-3 md:ml-0 md:w-full">
                <Img src="images/img_checkmark.svg" alt="checkmark" className="h-[64px] w-[64px]" />
                <Img src="images/img_close.svg" alt="close" className="h-[64px] w-[64px]" />
                <Img src="images/img_settings.svg" alt="settings" className="h-[64px] w-[64px]" />
                <Img src="images/img_close_light_green_100.svg" alt="close" className="h-[64px] w-[64px]" />
              </div>
              <div className="ml-[5px] mt-[30px] h-px self-stretch bg-gray-300 md:ml-0" />

              {/* product size options section */}
              <div className="ml-[5px] mt-[18px] flex w-[85%] flex-col items-start gap-[13px] md:ml-0 md:w-full">
                <Text as="p">Choose a Size</Text>

                {/* product size radio group section */}
                <RadioGroup name="chooseasize1" className="flex self-stretch">
                  <Radio
                    value="small1"
                    label="Small"
                    className="flex-1 gap-2 rounded-lg bg-blue_gray-50 py-[7px] pr-2.5 text-sm font-medium text-indigo-800"
                  />
                  <Radio
                    value="medium1"
                    label="Medium"
                    className="ml-[11px] w-[20%] gap-2 rounded-lg bg-gray-100 py-[7px] pr-2.5 text-sm font-medium text-gray-600"
                  />
                  <Radio
                    value="large1"
                    label="Large"
                    className="ml-[11px] flex-1 gap-2 rounded-lg bg-gray-100 py-[7px] pr-2.5 text-sm font-medium text-gray-600"
                  />
                  <Radio
                    value="extralarge1"
                    label="Extra Large"
                    className="ml-[11px] w-[25%] gap-2 rounded-lg bg-gray-100 py-[7px] pr-2.5 text-sm font-medium text-gray-600"
                  />
                  <Radio
                    value="xxl1"
                    label="XXL"
                    className="ml-[11px] flex-1 gap-2 rounded-lg bg-gray-100 py-[7px] pr-2.5 text-sm font-medium text-gray-600"
                  />
                </RadioGroup>
              </div>

              {/* product quantity and cart section */}
              <div className="ml-[5px] mt-10 flex w-[85%] gap-[19px] md:ml-0 md:w-full sm:flex-col">
                {/* product quantity selector section */}
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

                {/* add to cart button section */}
                <Button
                  color="indigo_800"
                  size="md"
                  leftIcon={<Img src="images/img_frame.svg" alt="frame" className="h-[21px] w-[21px]" />}
                  className="min-w-[309px] gap-2.5 rounded-[29px] font-semibold sm:px-5"
                >
                  Add To Cart
                </Button>
              </div>
              <div className="ml-[5px] mt-[31px] h-px self-stretch bg-gray-300 md:ml-0" />
              <Text size="s" as="p" className="mt-[33px] w-[95%] leading-7 !text-gray-500 md:w-full">
                The Embrace Sideboard is a stylish wear. With a top cloth designed to provide superior protection and
                look great, this storage solution is both functional and attractive. It fits seamlessly into any home
                decor, with clean lines and a timeless look. Crafted from premium materials for a combination of style,
                durability, and reliability.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
