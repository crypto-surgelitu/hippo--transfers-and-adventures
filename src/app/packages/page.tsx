import { PackageCard } from '@/components/PackageCard';
import { ExcursionCard } from '@/components/ExcursionCard';
import { Compass, Sailboat } from 'lucide-react';

export default function PackagesPage() {
  const safariPackages = [
    {
      title: "1 Day Private Safari to Tsavo East",
      duration: "1 Day",
      location: "Tsavo East National Park",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs8sjCxI368OvH0MMDnW8_dClu4eMzwRBtFmwLBU57a4pKTqnsMoTcMoOhEyvxfRfFmRgvajWM_TrxZ2S13PUQPAmBgXakQY_ZqcpzzWUEJatf_fH1x9hHsqyIUS14VPGkOu02GhIgK76svMtoQsMdhn-VUgO341TQ928n031ZRvOq1iP2ddxHMPPc0Tsyf2ECkVKwjkW6KFDHh17nUVq2XhEaoEDtaWoQgZHX2duHl9eAB0B_0KJzZZsZ8devss7i9tr9dPHhqic",
      slug: "1-day-tsavo-east"
    },
    {
      title: "2 Days / 1 Night Safari to Tsavo East",
      duration: "2 Days / 1 Night",
      location: "Tsavo East",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFH5zlXNFZn-ZpBHqgShxbEdFkw4rRL0-0wkuCKV2Uane5dN3ToOzl6twhZUEUjN0wC7dhMDX59VrsZkPUFvA_4XuzjcOCNCLVB92m6WLuBJNHyUI2ISM2nsEr5uhEvIpc2ooTpAXbHnjVoG9R2C470lnPRH9-C_R-1aABvickE2glL1CqmMpl6wLayvkjkMzZLCqeA4IFn8cKfJlrIgVSVhStt3WoFwcSDVPTxoWVF7tv2xpwA1J08YA0U2egHHdgPSR2DapGD00",
      slug: "2-days-tsavo-east"
    },
    {
      title: "3 Days / 2 Nights – Tsavo East & Taita Hills",
      duration: "3 Days / 2 Nights",
      location: "Tsavo East, Taita Hills Sanctuary",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiGo2leyCNVj7C4O5f7F2Uaom49zTGPjCsH7GPQ63pGDMdIWixn_XX2z4xpsPmxc8xDxOptWQcPI43R7q5JQORPsH-itcVJy7rScbOxE8PLCcZ1vbfNvvuJptTnPTSfsBavQyUvN3T0-WmVdq0Dm2vbIkYx_qfJzQidbwFUjC8-LgohIPlwl4GIIKqyYte7qgnq68wva2yVMwYIDWYLz_XME6iZtlQnJtCf2kV_Z9OLoBTBRR3XeiqNqh787cOWp07ZBd_R7EFo-o",
      slug: "3-days-tsavo-east-taita-hills"
    },
    {
      title: "3 Days / 2 Nights – Tsavo East & Amboseli",
      duration: "3 Days / 2 Nights",
      location: "Tsavo East, Amboseli National Park",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6mdqzovuJ5WITic74TuSVQOARLdW1DGjrY1bkzZKgxQ1-HMG8NlVmWlNBH_tIT6l8h_AgmAYwzeYNci0SPdIqqiwsWN0yi8KFnc-3-uTz6slrOMv6qzLtd-44y944t8tqs9vWZ6fDmEyxPu_pYffP8QD7Ptc8VMRA5ckKJBWTB80t83TV1OSJzTBucubVHa1vTDsKldr4bI0CiNUZlHQ3kQr7ZY-Vw2UoiUB87HdSe96AJih8RhZnii6RU320Yy1JtPgmUKnjQxY",
      slug: "3-days-tsavo-east-amboseli"
    },
    {
      title: "4 Days / 3 Nights – Tsavo West, Amboseli & Tsavo East",
      duration: "4 Days / 3 Nights",
      location: "Tsavo West, Amboseli, Tsavo East",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-YwN3Tmmd1viDiJyGrEiD5mj4T-ZcP-T8xZlYj2rioNUUcH8YXIjGfBm0mkIeyBjkoSby5rCs99p5zeQ0vI77hoCrrazDscJJjP4vOEQL_Cn6Wihe2rk1gmMjZTsg1nuFoRDvy8TywUjD3CzdYUE44lYQHU4XorNMPh-EMSYahwaGJ_oVi9Ptc4xCLdSXxjPSNDlzGjZibgqdbg4T-hvmpMFUDMAv-eukWOfBvOQLM5kHccEAjrUu0PMh7hDAerWeJpWcMlX17GE",
      slug: "4-days-tsavo-west-amboseli-tsavo-east"
    },
    {
      title: "4 Days / 3 Nights – Tsavo East, Amboseli & Taita Hills",
      duration: "4 Days / 3 Nights",
      location: "Tsavo East, Amboseli, Taita Hills",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk-83c_jEV1fJ-dJym3tjRU_2aMKHNOR2zHfjHUFgtbt02eYSLQO-gnvPSBKZE8_8MANbqI9uME4vj4auwY3lpO1qOigyawAvLtH6NDMQCPzVNhT9LMyz705bZQmEeJ-eDxyWPdvjltd-0d32XEa2iceFjpenB7ZRpkM-3PD02ZM5mrB1Q085exYgpbYti3Mz4vKJ2kGLkkisXIg6QQ-DZhXYnn-h3Ka8_rUx8lmh37H7cU3sdAXnpxH9h3SFqynB8kpcxXkGrKvM",
      slug: "4-days-tsavo-east-amboseli-taita-hills"
    },
    {
      title: "5 Days / 4 Nights – Tsavo East to Taita Hills",
      duration: "5 Days / 4 Nights",
      location: "Tsavo East, Tsavo West, Amboseli, Taita Hills",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCckRqCn5uKAD50HsH9VYMS4S_FjRcgA8b8iRzw1wDAqQshKYi054DXrac1IwoySq_MdD0iOXsiaC0v3VFVZX0MzjpmufVueAKG9B113dnXXE19tqHMzj3GRyTxW2ZqvSjj648fiPO7xysue3_GLZIRlSI5iIxiYHIe48D7Yep9m58Oc-OL9Po1uIcsCM2_iMKTYcFMo9dbW2KYEiojgf6bm56crX82jMmnp86aHETYhyCEkZf_G-4C2acjkKIFdyjKvj3MtzW_jKE",
      slug: "5-days-tsavo-east-taita-hills"
    },
    {
      title: "6 Days / 5 Nights Safari from Nairobi",
      duration: "6 Days / 5 Nights",
      location: "Masai Mara, Lake Nakuru, Lake Naivasha, Amboseli",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuClQwLjSp--Va4DSYijlnE-zwZMk90bmcEhIDJLFoX3iOhGwU0rjGCvEHL_6RN2Ce7hUiIZZmjhHqV8Ztb3UPVrTkO0ObLAmF7Iotlo9g6HBQ2jT_x-CfQjZCzC7g0fqw_qSwzQhwKySZcjoPhHUkSL0xFu5A0zgv9JlzjaIwhDBJYssPwKUkwnOamTr92aQ2xXLr75lqxjsQ9y5ooCwp6G3Hl68pSfpG75KqIZAaLKzfd0VfI3rLgqFCZJX0NWQiO2QGbYt5L14AE",
      slug: "6-days-safari-nairobi"
    },
    {
      title: "7 Days / 6 Nights – Masai Mara to Tsavo East",
      duration: "7 Days / 6 Nights",
      location: "Masai Mara, Nakuru, Naivasha, Amboseli...",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLN9Y5w5a0a-nXtCtThiel0ufG79MGAZKeMsnfuoNFIJBkn2rCHGXtIuknH4P_RAd2c9Nfwk1J6BINDo5NNLLIDOvdRmLY3NgJDSqctFfuJdvUEFqnxxXvuaBACFzbUKdr-QJ7soozF6O7GqLq4hPBZzwyMeE-F8U0orMFMK0W0BYvqvyfkzbDYGGWJf2YPtTT7nSaYq8Fw8PFzYk1A0Et6BIpLjJ1xldk5n1HFJ_WPHaPKoTvhulVKjFt-5ilHmMVXBJAIWC-DNE",
      slug: "7-day-safari-itinerary"
    },
    {
      title: "10 Days – Samburu to Tsavo East",
      duration: "10 Days",
      location: "Samburu, Ol Pejeta, Nakuru, Amboseli...",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMiw5KhxDqsHz2UWntfoiY4I5RbEfRQf6GPfNZ4jbbP7_gaxZeDc6X9DtFYnP11lHrJKkS-1Dz2r4BBLrJJ0Zwpn_1uV4c1-kkXOWexMJ7IEjJanSZCyKtjB8Ha_HGbqNJ_XmbdYWzJXQQreXLKjNGTi4tyS2p_nxdUXk1a1ELPE6884DJgu9u98sVCUwn7h_Mq-WL6cl--QfBJiA6ZD9leemA-mrJHxoWDxrVUjzppShtl0Qij2DN8g4ZkSJiZ4wSlteNRk_f9Ic",
      slug: "10-days-samburu-tsavo-east"
    }
  ];

  const excursions = [
    {
      title: "Wasini Island",
      description: "Snorkeling & Dolphin Watching",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAfhht_CJUUhZbmQZ-nkkaMFGP-JbP3uxPRGrCSU3CTD2WVGRwozEf62iwI55fcAbtueNdKSqybnagUmkNHxSlj_IHq5Ux0qZ9DvHomARbIDnBnNTHPJrsNQGD7LobSuhvZH09QYw2p_WOCSo9A9MHH4rA-3zXMdfJ4VhJSGif8DTTyddfyY2NMuCaUQguq-36_Z9cH5kEnOviP-90UeHywyed_H2Wu84QLAZoP1kHT8sphLF47DD1fG-9ioi5v2AhbJM5ZenVjjw",
      slug: "wasini-island"
    },
    {
      title: "Marafa Hell's Kitchen",
      description: "Sunset Canyon Experience",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6ZojdcuAPAVq3FbEawwWUhv6BVJV49dCjXWLuL4Y2B6tk-v9StSCBIgqYWNbebDHs3EH3ezQ9Vi3_8kf8Vei3_Z1l1KeKlThSrUvEd2AgREnJ3cCzjfiVZUmXh9yf1hCktDDKLuqmtNIG8X4PPWeq1vycGw_moYBUVXoo51wsyWArwHnl2DQ-WHSLZXINMkQ95Sz2_HHiJgq1gnFie7UURlMF3_j7s6oZu4fc2PhOSNpyPRcfGIcS5SJtKuj5NQC5ZnROydVYtgI",
      slug: "marafa-hells-kitchen"
    },
    {
      title: "Sardegna 2 Island",
      description: "Snorkeling & Seafood Lunch",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWGR2qfB-Sz3Xw_TXbx3x4lmEcRfvjRhGzqYxX5L06-WY8pdXmfoReZfyMDKlmc3vCyuDTde_vtEyd-_MpAqQR_IrFWuin4XAVvJG-BeWV_8Ybeutt5Hx1icPO7IMefFm8CCf73lOGghnbgJt3kljpkWv-SEoZnZKkEJgXL2Bhuj1Zi5aqQ5VGQ3ZetY-arqo839rmaONCpVKafJYPpua82WwWirbmKmPGn_dnxQ-Ju7AzW0C8aSijQBWunHn6RasuuO-01XExgNQ",
      slug: "sardegna-2-island"
    },
    {
      title: "Mida Creek",
      description: "Mangroves & Snorkeling",
      imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbAniJ6GM0CvfJrRY2P_pA4ubLOMNG5dr5rJN_sbjByM7plDyIsWpJxy8gchoKT9hNEW6DTKLF4bz7zB6LWUSiyIc9_qQ0UBAxIfdCftFGaJe5whnWK3gWOpmNe-hNbsZQoymvgr4YGCW_I3aQk381LFrvjFYyqWPbayjZzQIAxU5gi7wr8iMjJoZnL6BAUVzy4HHy1oP1gjArB80gJbmvYnMkD1fpFpxcT_P_oyZio9fUvWo67JOwd38Bqu6uEmt95bGYcfd2nGY",
      slug: "mida-creek"
    }
  ];

  return (
    <div className="pt-24 px-8 pb-12 flex flex-col items-center max-w-container-max mx-auto w-full">
      {/* Header Section */}
      <header className="text-center mb-16 w-full max-w-[800px]">
        <h1 className="font-headline-xl text-headline-xl text-on-surface mb-6">Safari Packages & Excursions</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Discover the untamed beauty of Kenya with our meticulously crafted itineraries. From the vast plains of Tsavo to the vibrant coastlines, experience service beyond expectation.
        </p>
      </header>

      {/* Safari Experience Packages */}
      <section className="w-full mb-20">
        <div className="flex items-center justify-between mb-8 w-full px-4 border-b border-surface-variant pb-4">
          <h2 className="font-headline-md text-3xl text-primary flex items-center gap-3">
            <Compass className="text-secondary" size={32} />
            Safari Experience Packages
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full">
          {safariPackages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </section>

      {/* Day Tours & Excursions */}
      <section className="w-full">
        <div className="flex items-center justify-between mb-8 w-full px-4 border-b border-surface-variant pb-4">
          <h2 className="font-headline-md text-3xl text-primary flex items-center gap-3">
            <Sailboat className="text-secondary" size={32} />
            Day Tours & Excursions
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {excursions.map((exc, index) => (
            <ExcursionCard key={index} {...exc} />
          ))}
        </div>
      </section>
    </div>
  );
}
