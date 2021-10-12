const { DigitalArt } = require('../models/Project');

const seeds = [
  // 0
  {
    title: 'Isometric Iconography',
    client: ['Gro Intelligence'],
    year: [2020],
    description:
      'Iconographic details for a branded sales presentation. Designed in collaboration with analysts presenting climate and technology related material.',
    tech: ['sketch'],
    thumbnail: {
      width: 6,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812096/ali/digital_art/iconography/isometric_exploration_fju5is.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812096/ali/digital_art/iconography/isometric_exploration_fju5is.png',
    ],
  },
  // 1
  {
    title: 'Glassy Planet',
    client: ['Personal'],
    year: [2019],
    description:
      'Self-assigned exploration in illustrator. Honing skills in layer opacities, color work, and composition.',
    tech: ['illustrator'],
    thumbnail: {
      width: 6,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1626968040/ali/digital_art/glassy_planet/glassy_planet_rgwugp.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812044/ali/digital_art/glassy_planet/glassy_planet-01_gnrcvh.png',
    ],
  },
  // 2
  {
    title: 'Infographics',
    client: ['Personal'],
    year: [2018],
    description:
      'Self-assigned exploration in illustrator. Honing skills in layer opacities, color work, layout and information hierarchy.',
    tech: ['illustrator'],
    thumbnail: {
      width: 12,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812141/ali/digital_art/infographics/_standard_infographics_thumbnail_bkzd0l.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812141/ali/digital_art/infographics/PENCILGRAPHIC-01_avaprf.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1627347459/ali/digital_art/infographics/circle_infographic-closer_look-02_w84rmx.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812141/ali/digital_art/infographics/circle_chart_ioffxp.png',
    ],
  },
  // 3
  {
    title: 'Digital Textiles',
    client: ['Avenue Mosaic', 'Personal'],
    year: [2012, 2018],
    description:
      'Digital renderings of tactile and imagined materials. Created for printing and set into full square repeat for patterning and actual use.',
    tech: ['photoshop', 'illustrator'],
    thumbnail: {
      width: 12,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812005/ali/digital_art/digital_textiles/_digital_textiles_thumbnail_xfdz4a.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812004/ali/digital_art/digital_textiles/web_wovens5_ejwgf3.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812004/ali/digital_art/digital_textiles/web_woven3_fksruy.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812004/ali/digital_art/digital_textiles/web_wovens6_wdg1oe.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812004/ali/digital_art/digital_textiles/web_wovens4_d0widn.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812004/ali/digital_art/digital_textiles/unicorn_y4bqhz.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812004/ali/digital_art/digital_textiles/web_woven2_uxqxzi.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812004/ali/digital_art/digital_textiles/VIEW_GRES_dune-lo_gsytct.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812004/ali/digital_art/digital_textiles/shibori_low-res_gvkkmb.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812004/ali/digital_art/digital_textiles/serene_g1qaqf.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812004/ali/digital_art/digital_textiles/web_woven_1_oktcwm.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812003/ali/digital_art/digital_textiles/ebraz-01_ksjtja.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812003/ali/digital_art/digital_textiles/leathe-lo_h9voyh.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812003/ali/digital_art/digital_textiles/foil-gold-fold-lo_zcovz7.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812003/ali/digital_art/digital_textiles/neuf-swatch_exgvke.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812003/ali/digital_art/digital_textiles/purple_plastic_r54ssb.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626812003/ali/digital_art/digital_textiles/AL-soft-brush_zskgfy.jpg',
    ],
  },
];

const seedDigitalArt = async () => {
  try {
    const clearProjects = await DigitalArt.deleteMany();

    if (!clearProjects) {
      console.log(clearProjects);
    } else {
      const addProjects = await DigitalArt.insertMany(seeds);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedDigitalArt;
