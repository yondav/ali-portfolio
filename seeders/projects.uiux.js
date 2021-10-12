const { UIUX } = require('../models/Project');

const seeds = [
  // 0
  {
    title: 'Email Subscription Flow',
    client: ['Gro Intelligence'],
    year: [2020],
    description:
      'Examples of hi-fi email templates to use for onboarding experiences. Use Case of varied personas arriving organically to initiate free, starter, or premium trials of platform. Concepting based on real copy from sales teams. These emails are meant to welcome free new users to the platform, and suggest they upgrade after their free trial of premium use. Friendly, but not overly "cute", as the personas are mainly business people in finance and ag-tech.',
    tech: ['sketch', 'figma'],
    thumbnail: {
      width: 12,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813888/ali/ui_ux/email_subscription_flow_gro_intelligence/_Email_Wireframes_Gro_Intelligence_Thumbnail_tugpf3.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813889/ali/ui_ux/email_subscription_flow_gro_intelligence/free_trial_start_dsrhfp.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813889/ali/ui_ux/email_subscription_flow_gro_intelligence/free_trial_ending_soon_btwx6d.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813889/ali/ui_ux/email_subscription_flow_gro_intelligence/upgrade_pitch_o0ssvw.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1627265865/ali/ui_ux/email_subscription_flow_gro_intelligence/5_Free_to_paid_after_time_of_free_use_OPTION_FOR_MODAL_e0zuzb.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813889/ali/ui_ux/email_subscription_flow_gro_intelligence/payment_failed_lsm5pl.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813889/ali/ui_ux/email_subscription_flow_gro_intelligence/Thank_you_for_your_payment__free_wait_period_upgrade_qcfnkt.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1627265865/ali/ui_ux/email_subscription_flow_gro_intelligence/9_free_trial_offer_wzhamk.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1627265865/ali/ui_ux/email_subscription_flow_gro_intelligence/10_welcome_to_gro_paid_-_desktop_kdtqbn.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813889/ali/ui_ux/email_subscription_flow_gro_intelligence/subscription_is_ending_soon_gkmqfc.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813889/ali/ui_ux/email_subscription_flow_gro_intelligence/Group_cgbdqc.png',
    ],
  },
  // 1
  {
    title: 'DSM',
    client: ['Gro Intelligence'],
    year: [2021],
    description:
      'examples of an ever-evolving  DSM built in figma. Recently rebranded, this company has asked me to coordinate, consolidate, and communicate a holistic design panel for their assets and how to build future net new components within brand guidelines. the Design System functions as a living organism, growing with each need, but retaining its core values to ensure holistic branding across all channels.',
    tech: ['figma'],
    thumbnail: {
      width: 6,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1627014057/ali/ui_ux/dsm/_DSM_thumbnail_ey3lrs.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813845/ali/ui_ux/dsm/colorsBrand_Palette_ykp14c.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813845/ali/ui_ux/dsm/colorsTints_Shades_n0eap3.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813845/ali/ui_ux/dsm/colorsGrays_tbqkh3.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813845/ali/ui_ux/dsm/Buttons_obzwj9.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813845/ali/ui_ux/dsm/Logo_Definitions_Use_s2tp6g.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813845/ali/ui_ux/dsm/Typography_yvmanq.png',
    ],
  },
  // 2
  {
    title: 'Gated Webinar Content',
    client: ['Gro Intelligence'],
    year: [2021],
    description:
      'In an attempt to gate video content on webpage, I went through various explorations of lo, mid and hi-fidelity mocks to try and make an inticing, yet functional form for this landing page. We need to collect company details in order to effectively segment and target personas, and gating our archived webinars was a means to not only gather intel on general interest, but on who exactly was interested in what we had to say. ',
    tech: ['figma'],
    thumbnail: {
      width: 6,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813924/ali/ui_ux/gated_webinar_content/_gated_webinar_thumbnail_syjr16.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813924/ali/ui_ux/gated_webinar_content/full_lock_3_a3dupo.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813924/ali/ui_ux/gated_webinar_content/full_lock_4_ovdflm.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813925/ali/ui_ux/gated_webinar_content/full_lock_5_filled_llcgsm.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813925/ali/ui_ux/gated_webinar_content/full_lock_4b_ibg4tz.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813925/ali/ui_ux/gated_webinar_content/full_lock_3-1_hd4wtq.png',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813925/ali/ui_ux/gated_webinar_content/full_lock_5_dfbmni.png',
    ],
  },
  // 3
  {
    title: 'Invitation',
    client: ['DLV'],
    year: [2018],
    description:
      'Event marketing design for industry event in Brooklyn, NY. An email marketing and instagram campaign designed to accrue RSVPs to an interior design industry event. Four artists and designers presenting new work in a engaging salon environment. Concept, artwork and layout design.',
    tech: ['photoshop'],
    thumbnail: {
      width: 12,
      src: 'https://res.cloudinary.com/yup-schlepp/image/upload/v1627014100/ali/ui_ux/dlv_invitation/_DLV_Invitation_thumbnail_klhzdl.png',
    },
    gallery: [
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813819/ali/ui_ux/dlv_invitation/DLV_Invite_1_myqxzb.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813819/ali/ui_ux/dlv_invitation/DLV_Invite_2_ipf1nk.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813819/ali/ui_ux/dlv_invitation/DLV_Invite_3_vzochb.jpg',
      'https://res.cloudinary.com/yup-schlepp/image/upload/v1626813819/ali/ui_ux/dlv_invitation/DLV_Invite_4_tdcrvo.jpg',
    ],
  },
];

const seedUIUX = async () => {
  try {
    const clearProjects = await UIUX.deleteMany();

    if (!clearProjects) {
      console.log(clearProjects);
    } else {
      const addProjects = await UIUX.insertMany(seeds);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = seedUIUX;
