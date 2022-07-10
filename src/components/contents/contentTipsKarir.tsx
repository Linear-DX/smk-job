import {
  Box,
  Stack,
  Heading,
  Text,
  Image,
  Center,
  Button,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import tipsKarir1 from '../../assets/pictures/content/tipsKarir1.jpg'
import tipsKarir2 from '../../assets/pictures/content/tipsKarir2.jpg'
import tipsKarir3 from '../../assets/pictures/content/tipsKarir3.jpg'
import tipsKarir4 from '../../assets/pictures/content/tipsKarir4.jpg'
import tipsKarir5 from '../../assets/pictures/content/tipsKarir5.jpg'
import tipsKarir6 from '../../assets/pictures/content/tipsKarir6.jpg'

export function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
}

export function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick} />
  );
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default function ContentTipsKarir() {

  const cards = [
    {
      title: '4 Tips dan trik sukses berkarir sejak kuliah',
      text:
        "Pendidikan di Indonesia saat ini sudah berkembang. Kini, pemerintah memberikan kesempatan bagi mahasiswa... ",
      image:
        tipsKarir1,
    },
    {
      title: '5 Cara Jitu Kerja Tanpa Stres',
      text:
        "Pekerja harus punya perencanaan matang dalam setiap kerjaannya. Tujuannya supaya pekerja tidak stres dalam mengerjakannya...",
      image:
        tipsKarir2,
    },
    {
      title: '4 Tips Menikmati Pekerjaan meski Terus Ditekan Bos',
      text:
        "Setiap pekerja harus bisa menikmati pekerjaan yang sedang dijalani. Pasalnya dengan menikmati, seseorang akan... ",
      image:
        tipsKarir3,
    },
    {
      title: '5 Tips Jaga Hubungan Kerja dengan Baik, Sabar dan Jujur',
      text:
        "Menjaga hubungan baik dengan rekan kerja menjadi suatu hal yang sangat penting di dunia kerja...",
      image:
        tipsKarir4,
    },
    {
      title: '8 Rahasia untuk Mencapai Karir yang Sukses',
      text:
        "Kesuksesan butuh usaha yang tidak bisa datang bak sulap dan secepat kilat. Ada proses dan perjuangan keras untuk meraihnya. Kamu tak perlu takut ...",
      image:
        tipsKarir5,
    },
    {
      title: 'Pasti Sukses! Intip 5 Tips Menyusun Perencanaan Karir Pribadi Berikut!',
      text:
        "Karir yang bagus dengan gaji tinggi merupakan impian bagi setiap orang. Untuk mencapainya, kamu harus...",
      image:
        tipsKarir6,
    },
  ];

  return (
    <div className="tipsKarirBody">
      <Heading fontSize={'3xl'} mt={4} ml={12} color={'white'}> Tips Karir </Heading>
      <Slider {...settings}>
        {cards.map((card, index) => {
          return (
            <div key={index}>
              <Center py={6}>
                <Box
                  key={index}
                  maxW={'350px'}
                  maxH={'520px'}
                  w={'full'}
                  bg={'gray.900'}
                  boxShadow={'2xl'}
                  rounded={'md'}
                  p={6}
                  overflow={'hidden'}
                  margin={'auto'}
                  backgroundColor={'gray.800'}
                >
                  <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image src={(card.image)} height={'full'} w={'full'} />
                  </Box>

                  <Stack>
                    <Text
                      color={'green.500'}
                      textTransform={'uppercase'}
                      fontWeight={800}
                      fontSize={'sm'}
                      letterSpacing={1.1}>
                      Tips Karir
                    </Text>
                    <Heading
                      color={'white'}
                      fontSize={'2xl'}
                      fontFamily={'body'}>
                      {card.title}
                    </Heading>
                    <Text color={'gray.200'}>
                      {card.text}
                    </Text>
                  </Stack>


                  <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                    <Button
                      as="a"
                      href={'/tips-karir'}>
                      Baca Lebih Lanjut
                    </Button>
                  </Stack>

                </Box>
              </Center>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
