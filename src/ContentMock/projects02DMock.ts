import { ProjectType } from '../@types/ProjectType'
import { ContentType } from '../@types/ContentType'

/* Titles
Troubleshooting and Repairing Faulty Microwave Ovens
Installation and Repair of Electric Stoves and Ovens
Troubleshooting and Repairing Dishwashers
Repair and Maintenance of Gas Stoves and Ovens
Troubleshooting and Repairing Washing Machines and Dryers
Installation and Repair of Electric and Gas Ranges
Troubleshooting and Repairing Small Kitchen Appliances
Installation and Repair of Garbage Disposals
Troubleshooting and Repairing HVAC Systems
Troubleshooting and Repairing Internet Equipment
Installation and Maintenance of Computer Devices
Troubleshooting and Repairing Smart Home Systems
*/

export const projects02D: ProjectType[] = [
  {
    idProfile: '2',
    title: 'Troubleshooting and Repairing Faulty Microwave Ovens',
    contentType: ContentType['ProjectType'],
    isActive: true,
    subtitle: 'Quickly diagnose and fix common problems with microwaves',
    description: [
      "If your microwave oven isn't heating properly, has a broken turntable, or isn't working at all, this project will show you how to diagnose and repair common issues. With step-by-step instructions and troubleshooting tips, you'll be able to get your microwave up and running in no time.",
      "This project covers a range of brands and models, so whether you have a countertop or built-in microwave, you'll find the guidance you need. Learn how to identify faulty components, replace parts, and test your microwave to ensure it's working properly.",
    ],
    customer: 'Homeowners, renters, and property managers',
    builtwith: 'Multimeter, soldering iron, replacement parts',
    imgSrc:
      'https://cdn.thewirecutter.com/wp-content/media/2022/11/slide-in-gas-range-2048px-5676-3x2-1.jpg',
    linkHref:
      'https://cdn.thewirecutter.com/wp-content/media/2022/11/slide-in-gas-range-2048px-5676-3x2-1.jpg',
  },
  {
    idProfile: '2',
    title: 'Installation and Repair of Electric Stoves and Ovens',
    contentType: ContentType['ProjectType'],
    isActive: true,
    subtitle: 'Get your electric stove or oven up and running in no time',
    description: [
      "Whether you're installing a brand new electric stove or oven or repairing an existing one, this project will walk you through the process. From wiring and circuit breakers to heating elements and thermostats, you'll learn everything you need to know to get your appliance working like new.",
      "This project covers a range of electric stove and oven models, so whether you have a freestanding or built-in appliance, you'll find the guidance you need. Learn how to troubleshoot common problems, replace faulty parts, and test your appliance to ensure it's working properly.",
    ],
    customer: 'Homeowners, renters, and property managers',
    builtwith: 'Multimeter, wiring tools, replacement parts',
    imgSrc: 'https://example.com/electric-stove-repair-image.jpg',
    linkHref: 'https://example.com/electric-stove-repair-project',
  },
  {
    idProfile: '2',
    title: 'Troubleshooting and Repairing Dishwashers',
    contentType: ContentType['ProjectType'],
    isActive: true,
    subtitle: 'Fix common dishwasher problems and get your dishes clean again',
    description: [
      "If your dishwasher isn't cleaning dishes properly, isn't draining, or is making strange noises, this project will show you how to diagnose and repair common issues. With step-by-step instructions and troubleshooting tips, you'll be able to get your dishwasher working like new.",
      "This project covers a range of dishwasher brands and models, so whether you have a portable or built-in dishwasher, you'll find the guidance you need. Learn how to identify faulty components, replace parts, and test your dishwasher to ensure it's working properly.",
    ],
    customer: 'Homeowners, renters, and property managers',
    builtwith: 'Multimeter, plumbing tools, replacement parts',
    imgSrc: 'https://example.com/dishwasher-repair-image.jpg',
    linkHref: 'https://example.com/dishwasher-repair-project',
  },
  {
    idProfile: '2',
    title: 'Repair and Maintenance of Gas Stoves and Ovens',
    contentType: ContentType['ProjectType'],
    isActive: true,
    subtitle: 'Ensuring Safe and Efficient Performance',
    description: [
      "As a skilled technician in gas stoves and ovens, I have a deep understanding of the components and inner workings of these appliances. Whether it's routine maintenance or an unexpected repair, I am committed to ensuring that your gas stove or oven is running safely and efficiently.",
      "I can perform a wide range of maintenance and repair services, including gas line inspections, pilot light adjustments, and replacement of faulty parts. Don't let a malfunctioning gas stove or oven disrupt your cooking routine - let me take care of the issue quickly and effectively.",
    ],
    customer:
      'Homeowners, chefs, and restaurant owners who rely on gas stoves and ovens',
    builtwith:
      'Gas line tools, multimeter, replacement parts, safety equipment',
    imgSrc:
      'https://www.thespruce.com/thmb/vZphuRwG8bi7FPLo33ivPeIExLs=/1414x1414/smart/filters:no_upscale()/gas-stove-oven-5960e58c3df78cdc68beb0f9.jpg',
    linkHref: 'https://example.com/gas-stove-repair',
  },

  {
    idProfile: '2',
    title: 'Troubleshooting and Repairing Washing Machines and Dryers',
    contentType: ContentType['ProjectType'],
    isActive: true,
    subtitle: 'Solving problems with your laundry appliances',
    description: [
      'If your washing machine or dryer is not working properly, it can be a real hassle. Our team can diagnose and repair a wide range of issues, including malfunctioning controls, damaged belts, and broken motors.',
      "We know how important it is to get your laundry appliances back up and running as quickly as possible. That's why we offer fast and reliable service at an affordable price.",
    ],
    customer: 'Homeowners and landlords',
    builtwith: 'Multimeter, Screwdrivers, Wrenches, Replacement Parts',
    imgSrc:
      'https://www.thespruce.com/thmb/zcXprl9q3zqfmKuEwBfphSaNYOw=/2826x1884/filters:no_upscale():max_bytes(150000):strip_icc()/washing-machine-626463055-5a1c86a62023b90036a4c81e.jpg',
    linkHref: 'https://www.example.com',
  },
  {
    idProfile: '2',
    title: 'Installation and Repair of Electric and Gas Ranges',
    contentType: ContentType['ProjectType'],
    isActive: true,
    subtitle: 'Installing and fixing your kitchen range',
    description: [
      'Whether you need a new electric or gas range installed or your current one repaired, our team can help. We have experience with all major brands and models, and can quickly diagnose and fix any issues.',
      'We also offer installation services for new ranges, including hooking up gas lines and making sure everything is working properly.',
    ],
    customer: 'Homeowners and restaurant owners',
    builtwith: 'Gas piping equipment, electrical wiring, Replacement Parts',
    imgSrc:
      'https://www.whirlpool.com/content/dam/global/documents/201803/Product-Images-W11047196-D-F-W-19_5%20Gas%20Range%20with%20SpeedHeat%E2%84%A2%20Burners%20-%20Stainless%20Steel-3-UP-W11047196-D-F-W-19_5%20Gas%20Range%20with%20SpeedHeat%E2%84%A2%20Burners%20-%20Stainless%20Steel-3-UP-1600x1034.jpg',
    linkHref: 'https://www.example.com',
  },
  {
    idProfile: '2',
    title: 'Troubleshooting and Repairing Small Kitchen Appliances',
    contentType: ContentType['ProjectType'],
    isActive: true,
    subtitle: 'Fixing your toaster, blender, and more',
    description: [
      "If you have a small kitchen appliance that's not working properly, our team can help. We can quickly diagnose and fix issues with toasters, blenders, coffee makers, and more.",
      "We know how important it is to have these appliances working properly, especially when you're in a rush in the morning. That's why we offer fast and reliable service at an affordable price.",
    ],
    customer: 'Homeowners and small business owners',
    builtwith: 'Multimeter, Screwdrivers, Wrenches, Replacement Parts',
    imgSrc:
      'https://cdn.vox-cdn.com/thumbor/R67iBzKdfw3GYd0zLlQMyYRvIAc=/0x0:2500x1667/1200x800/filters:focal(1050x632:1450x1032)/cdn.vox-cdn',

    linkHref: 'https://www.example.com',
  },

  {
    idProfile: '2',
    title: 'Installation and Repair of Garbage Disposals',
    contentType: ContentType['ProjectType'],
    isActive: true,
    subtitle: 'Keeping Your Kitchen Clean and Tidy',
    description: [
      "If you're tired of dealing with clogged drains and stinky garbage disposals, we're here to help. Our team of experienced technicians can install and repair all types of garbage disposals, so you can keep your kitchen clean and tidy.",
      'From basic installations to complex repairs, we have the tools and expertise to get the job done right. Contact us today to schedule an appointment and get your garbage disposal back in top shape.',
    ],
    customer: 'Homeowners, landlords, property managers',
    builtwith:
      'Wrenches, pliers, garbage disposal mounting kits, wiring, electrical boxes',
    imgSrc:
      'https://www.mrscrappy.com/wp-content/uploads/2018/07/Garbage-Disposal-Installation-Mount-Adapter-Kit.jpg',
    linkHref: 'https://example.com/garbage-disposal-installation-repair',
  },
  {
    idProfile: '2',
    title: 'Troubleshooting and Repairing HVAC Systems',
    contentType: ContentType['ProjectType'],
    isActive: true,
    subtitle: 'Keeping You Comfortable Year-Round',
    description: [
      "If your HVAC system isn't working like it should, it's time to call in the experts. Our team of skilled technicians can diagnose and repair all types of HVAC issues, from faulty thermostats to refrigerant leaks and more.",
      'We use state-of-the-art tools and techniques to quickly identify the problem and get your system back up and running. Contact us today to schedule an appointment and keep your home comfortable year-round.',
    ],
    customer: 'Homeowners, property managers, commercial building owners',
    builtwith:
      'Refrigerant gauges, voltmeters, pressure sensors, HVAC repair parts',
    imgSrc:
      'https://www.resheatandair.com/wp-content/uploads/2018/08/HVAC-Repair-300x300.jpg',
    linkHref: 'https://example.com/hvac-troubleshooting-repair',
  },
  {
    idProfile: '2',
    title: 'Troubleshooting and Repairing Internet Equipment',
    contentType: ContentType['ProjectType'],
    isActive: true,
    subtitle: 'Get Your Internet Back Up and Running',
    description: [
      "In today's connected world, a reliable internet connection is essential. If you're having issues with your internet equipment, our team of skilled technicians can help.",
      'We can diagnose and repair a wide range of issues, from slow speeds to dropped connections and more. Contact us today to schedule an appointment and get your internet back up and running.',
    ],
    customer: 'Homeowners, renters, small businesses',
    builtwith:
      'Network cable testers, wireless network analyzers, networking equipment repair parts',
    imgSrc:
      'https://cdn.pixabay.com/photo/2016/03/26/22/57/wifi-1281670_960_720.png',
    linkHref: 'https://example.com/internet-equipment-troubleshooting-repair',
  },

  {
    idProfile: '2',
    title: 'Installation and Maintenance of Computer Devices',
    contentType: ContentType['ProjectType'],
    isActive: true,
    subtitle: 'Keep your devices up and running smoothly',
    description: [
      "Whether you're a business or an individual, your computer devices are essential to your daily routine. Let me take the hassle out of installation and maintenance with my expert services.",
      'I specialize in setting up new devices, performing routine maintenance, and troubleshooting issues that arise with hardware and software.',
    ],
    customer: 'Small businesses and individuals',
    builtwith:
      'Operating systems including Windows and macOS, hardware components including CPUs and GPUs, peripherals such as printers and scanners',
    imgSrc: 'https://example.com/images/computer-devices.jpg',
    linkHref: 'https://example.com/computer-devices',
  },
  {
    idProfile: '2',
    title: 'Troubleshooting and Repairing Smart Home Systems',
    contentType: ContentType['ProjectType'],
    isActive: true,
    subtitle: 'Get your smart home back up and running',
    description: [
      'Smart home systems can be a great convenience, but when they stop working properly it can be a real headache. Let me help you troubleshoot and repair any issues with your smart home system.',
      "Whether it's a malfunctioning thermostat, an unresponsive security camera, or anything in between, I have the expertise to diagnose and fix the problem quickly and efficiently.",
    ],
    customer: 'Homeowners with smart home systems',
    builtwith:
      'Smart home platforms such as Google Home and Amazon Alexa, individual smart devices such as thermostats and cameras',
    imgSrc: 'https://example.com/images/smart-home.jpg',
    linkHref: 'https://example.com/smart-home',
  },
]
