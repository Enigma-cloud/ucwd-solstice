import React from 'react';

import PageContainer from '../general/page-container';
import CardMiniProfile from '../cards/card-mini-profile';
import BookingForm from '../forms/booking-form';
import ImageCarousel from '../carousel/image-carousel';

import { FaStar } from 'react-icons/fa';
import { IoMdPerson } from 'react-icons/io';


const TripPage = ({ tripData }) => {
  /** DEFAULT IMAGE DATA */
  const imgArr = [
    tripData.tripImages[0], 
    tripData.tripImages[0], 
    tripData.tripImages[0],
    tripData.tripImages[0], 
    tripData.tripImages[0],
    tripData.tripImages[0]
  ];

  return (
    <PageContainer extraStyles={'pt-20'}>
      <div className={`
        container flex flex-col 
        justify-center items-center 
        min-h-full max-w-full 
        px-6 pt-10 gap-6 relative
      `}>
        {/* Shows image gallery/carousel when for smaller screens (below lg) */}
        <section className='container flex justify-center items-center 
          h-full w-full rounded-lg px-8
          lg:hidden
        '>
          <ImageCarousel imgData={imgArr} />
        </section>

        {/* Shows image grid for larger screens (above lg) */}
        <section className='hidden container justify-center items-center 
          overflow-hidden h-full rounded-lg 
          lg:flex lg:w-2/3
        '>
          <div className="image-gallery">
            {
              imgArr
              .map((val, key) => {
                return (
                  <figure
                    key={key} 
                    className={`image-animation ${`image`+ (key + 1)}
                    `}
                  >
                    <img
                      loading='lazy' 
                      className='object-fill h-full w-full'
                      src={require(`../../assets/${val}`)}  
                      alt="trip cover"
                    />
                  </figure>
                )
              })
            }
          </div>
        </section>
        <section className='container grid grid-cols-1 gap-4 gap-x-12
          justify-center items-start 
          bg-white text-black h-full
          xl:w-2/3 xl:grid-cols-3
        '>
          <div className="flex flex-col justify-start items-start gap-2
            w-full h-full col-span-2 py-6
          ">
            <h1 className='text-3xl font-semibold
            '>
              {tripData.tripName}
            </h1>
            <h2 className='text-base font-normal
              lg:text-2xl
            '>
              {tripData.tripAddress}
            </h2>
            <div className='flex items-center gap-2'>
              <FaStar className='h-4 w-4 text-primary' />
              <h2 className='flex items-end gap-2 text-base
                lg:text-xl
              '>
                {tripData.tripRating}/5
                <span className='text-sm font-light text-custom-gray-dark
                  lg:text-base
                '>
                  ({tripData.tripReviews} reviews)
                </span>
              </h2>
            </div>
            <div className='flex flex-col items-center gap-2 mt-4'>
              <p className='text-sm 
                lg:text-base
              '>
                {tripData.tripDescription}
              </p>
              <p className='text-sm
                lg:text-base
              '>
                {tripData.tripDescription}
              </p>
            </div>
            <div className='flex flex-col justify-start gap-2 mt-4'>
              <hgroup>
                <h1 className='text-base font-semibold capitalize
                    lg:text-lg
                '>
                    {tripData.tripAccommodation.name}
                </h1>
                <h2 className='text-base font-light capitalize'>
                  {tripData.tripAccommodation.generalDescription}
                </h2>
              </hgroup>
              <p className='text-sm 
                lg:text-base
              '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempora, pariatur est ipsum tenetur ipsam quibusdam corporis vero dolor sint illum deleniti doloribus autem porro reprehenderit numquam excepturi. Ipsam, at.
              </p>
              <h1 className='text-base font-semibold capitalize
                  md:text-lg
              '>
                  Amenities
              </h1>
              <ul className='px-4 grid auto-cols-max justify-start items-start list-disc
                  md:grid-cols-2 lg:w-fit lg:gap-x-12
              '>
                {
                  tripData.tripAmenities &&
                  tripData.tripAmenities.map((val, key) => {
                      return (
                          <li key={key}
                              className='text-sm font-light
                              md:text-base'
                          >
                              {val}
                          </li>
                      )
                  })
                  }
              </ul>
            </div>
            <div className='flex flex-col justify-start gap-2 mt-6'>
              <h1 className='text-base font-semibold capitalize
                  lg:text-lg
              '>
                  Guides
              </h1>
              <ul className='flex gap-8 w-full overflow-x-auto
                md:flex-row
              '>
                  {
                    tripData.tripGuides?.map((val, key) => {
                      return (
                        <CardMiniProfile 
                          key={key}
                          cardIcon={<IoMdPerson className='h-6 w-6' />}
                          cardTitle={val.guideName}
                          cardSubtitle={val.guideYearsOfExperience + ' years of experience'}
                          cardContent={val.guideDescription}
                        />
                      )
                    })
                  }
              </ul>
              
            </div>
          </div>
          <div className="flex flex-col justify-center items-center 
            w-full h-full rounded-md shadow-lg
          bg-main text-white
            lg:h-fit
          ">
            <BookingForm 
              tripPrice={tripData.tripBasePrice} 
              tripTaxes={tripData.tripTaxesFees[0]} 
              tripOtherFees={tripData.tripTaxesFees[1]}
              tripLocation={tripData.tripFullLocation} 
            />
          </div>
        </section>
      </div>
    </PageContainer>
  )
}

export default TripPage;