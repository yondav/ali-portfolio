const { PresentationDesign } = require('../models/Project');

const seeds = [
  // 0
  {
    title: 'Vamos Juntos',
    client: ['WeWork'],
    year: [2019],
    description:
      'Template for internal presentation design. All were developed and conceptualized alongside a team of learning engineers, sales people, and directors. The final deliverable was used worldwide in a series of training seminars.',
    tech: ['powerpoint'],
    thumbnail: {
      width: 12,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812489/ali/presentation_design/vamos_juntos_wework/_vamos_juntos_thumbnail_gg70du.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812489/ali/presentation_design/vamos_juntos_wework/vamos_juntos-01_qkbkhf.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812489/ali/presentation_design/vamos_juntos_wework/vamos_juntos-02_pyzffr.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812489/ali/presentation_design/vamos_juntos_wework/vamos_juntos-03_pv9tcx.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812489/ali/presentation_design/vamos_juntos_wework/vamos_juntos-04_z3e2bd.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812489/ali/presentation_design/vamos_juntos_wework/vamos_juntos-05_zlqkdu.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812489/ali/presentation_design/vamos_juntos_wework/vamos_juntos-06_jfmltp.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812489/ali/presentation_design/vamos_juntos_wework/vamos_juntos-07_ovh5oe.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812489/ali/presentation_design/vamos_juntos_wework/vamos_juntos-08_jhmrze.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812489/ali/presentation_design/vamos_juntos_wework/vamos_juntos-09_x8eakd.png',
    ],
  },
  // 1
  {
    title: 'Sales Deck',
    client: ['Gro Intelligence'],
    year: [2021],
    description:
      'Versatile and scalable template provided as fundamental for sales team to place own content. Style guide included in auto-populated deletable slides when template is launched as new document.',
    tech: ['google slides'],
    thumbnail: {
      width: 6,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812408/ali/presentation_design/sales_deck_gro_intelligence/sales_deck_gro_intelligence_thumbnail_m1use4.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812408/ali/presentation_design/sales_deck_gro_intelligence/SALES_DECK_TEMPLATE_2021_yiwan3.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812407/ali/presentation_design/sales_deck_gro_intelligence/SALES_DECK_TEMPLATE_2021-2_hctlxa.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812408/ali/presentation_design/sales_deck_gro_intelligence/SALES_DECK_TEMPLATE_2021-3_f4wyco.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812408/ali/presentation_design/sales_deck_gro_intelligence/SALES_DECK_TEMPLATE_2021-4_jcg2ux.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812408/ali/presentation_design/sales_deck_gro_intelligence/SALES_DECK_TEMPLATE_2021-5_zxn4nc.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812408/ali/presentation_design/sales_deck_gro_intelligence/SALES_DECK_TEMPLATE_2021-6_uhy3as.jpg',
    ],
  },
  // 2
  {
    title: 'Sequence Cards',
    client: ['Fly Louie'],
    year: [2020],
    description:
      'Digital backdrop during presentation by CEO of startup (Fly Louie). Later used as permanent branding slides on ipads in local airports. ',
    tech: ['indesign'],
    thumbnail: {
      width: 6,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1627090493/ali/presentation_design/fly_louie_sequence_cards/fly_louie_sequence_cards_2_uoipoc.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812292/ali/presentation_design/fly_louie_sequence_cards/FL_sequence_card_1_xxb081.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812292/ali/presentation_design/fly_louie_sequence_cards/FL_sequence_card_2_xwtheb.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812292/ali/presentation_design/fly_louie_sequence_cards/FL_sequence_card_3_dxcpja.png',
    ],
  },
  // 3
  {
    title: 'Digital Backdrop',
    client: ['GMStek'],
    year: [2016],
    description:
      'This was the backdrop for GMSTEK’s presentation at an annual aviation conference. The actual dimensions were 120” x 90”. The white drop shadows were printed with silver leaf to create dimensionality.',
    tech: ['illustrator'],
    thumbnail: {
      width: 12,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812333/ali/presentation_design/gmstek_digital_backdrop/GMStek_Background_Thumbnail_vxgtq1.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812333/ali/presentation_design/gmstek_digital_backdrop/GMSTEK_podium_layout_dez8nk.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812333/ali/presentation_design/gmstek_digital_backdrop/GMStek-_Digital_Billboard_lnafbu.jpg',
    ],
  },
  // 4
  {
    title: 'Enterprise Camp',
    client: ['WeWork'],
    year: [2019],
    description:
      'Template for internal presentation design. All were developed and conceptualized alongside a team of learning engineers, sales people, and directors. The final deliverable was used worldwide in a series of training seminars.',
    tech: ['powerpoint'],
    thumbnail: {
      width: 6,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812253/ali/presentation_design/enterprise_camp_wework/_Enterprise_Camp_Thumbnail_nhsyzs.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812253/ali/presentation_design/enterprise_camp_wework/enterprise_camp_1_l7vdku.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812253/ali/presentation_design/enterprise_camp_wework/enterprise_camp_2_dbfkin.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812253/ali/presentation_design/enterprise_camp_wework/enterprise_camp_3_v7pkod.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812253/ali/presentation_design/enterprise_camp_wework/enterprise_camp_4_uswjgk.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812253/ali/presentation_design/enterprise_camp_wework/enterprise_camp_5_nu9pwb.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812253/ali/presentation_design/enterprise_camp_wework/enterprise_camp_6_graqim.png',
    ],
  },
  // 5
  {
    title: 'Sales Kick Off',
    client: ['WeWork'],
    year: [2019],
    description:
      'Template for internal presentation design. All were developed and conceptualized alongside a team of learning engineers, sales people, and directors. The final deliverable was used worldwide in a series of training seminars.',
    tech: ['powerpoint'],
    thumbnail: {
      width: 6,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812449/ali/presentation_design/sales_kick_off_wework/_Sales_Kick_Off_Thumbnail_dr1qey.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812449/ali/presentation_design/sales_kick_off_wework/SALES_KICK_OFF-01_x95ycj.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812449/ali/presentation_design/sales_kick_off_wework/SALES_KICK_OFF-02_b1ncnq.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812449/ali/presentation_design/sales_kick_off_wework/SALES_KICK_OFF-03_xg5z63.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812449/ali/presentation_design/sales_kick_off_wework/SALES_KICK_OFF-04_xig21o.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812449/ali/presentation_design/sales_kick_off_wework/SALES_KICK_OFF-05_hyiflr.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812449/ali/presentation_design/sales_kick_off_wework/SALES_KICK_OFF-06_cicekn.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812450/ali/presentation_design/sales_kick_off_wework/SALES_KICK_OFF-07_lbcxob.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812449/ali/presentation_design/sales_kick_off_wework/SALES_KICK_OFF-08_o7mwov.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812450/ali/presentation_design/sales_kick_off_wework/SALES_KICK_OFF-09_swnuyj.png',
    ],
  },
  // 6
  {
    title: 'Inside Sales',
    client: ['WeWork'],
    year: [2019],
    description:
      'Template for internal presentation design. All were developed and conceptualized alongside a team of learning engineers, sales people, and directors. The final deliverable was used worldwide in a series of training seminars.',
    tech: ['powerpoint'],
    thumbnail: {
      width: 6,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812368/ali/presentation_design/inside_sales_wework/_Inside_Sales_Thumbnail_uejnns.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812368/ali/presentation_design/inside_sales_wework/inside_sales_1_g7e5ks.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812368/ali/presentation_design/inside_sales_wework/inside_sales_2_rndi8x.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812368/ali/presentation_design/inside_sales_wework/inside_sales_3_br5tev.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1627347555/ali/presentation_design/inside_sales_wework/inside_sales_4_lfdl2l.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1627347555/ali/presentation_design/inside_sales_wework/inside_sales_5_pq5exu.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812368/ali/presentation_design/inside_sales_wework/inside_sales_6_gzzaiq.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1627347555/ali/presentation_design/inside_sales_wework/inside_sales_7_sxiugo.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1627347555/ali/presentation_design/inside_sales_wework/inside_sales_8_c0d4n9.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812368/ali/presentation_design/inside_sales_wework/inside_sales_9_vefj4i.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812369/ali/presentation_design/inside_sales_wework/inside_sales_10_vw8khg.png',
    ],
  },
  // 7
  {
    title: 'Digital Backdrop',
    client: ['TGIF'],
    year: [2018],
    description: 'Digital backdrop during presentation conference.',
    tech: ['illustrator'],
    thumbnail: {
      width: 6,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812205/ali/presentation_design/digital_backdrop_TGIF/_Digital_Backdrop_TGIF_Thumbnail_fhzwrt.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812205/ali/presentation_design/digital_backdrop_TGIF/Digital_Backdrop_TGIF_1_zsmmde.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812205/ali/presentation_design/digital_backdrop_TGIF/Digital_Backdrop_TGIF_2_fxvdui.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812205/ali/presentation_design/digital_backdrop_TGIF/Digital_Backdrop_TGIF_3_rdjtzr.jpg',
    ],
  },
];

const seedPresentationDesign = async () => {
  try {
    const clearProjects = await PresentationDesign.deleteMany();

    if (!clearProjects) {
      console.log(clearProjects);
    } else {
      const addProjects = await PresentationDesign.insertMany(seeds);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedPresentationDesign;
