import Acrobat from './Acrobat';
import AfterEffects from './AfterEffects';
import CreativeCloud from './CreativeCloud';
import Figma from './Figma';
import GoogleSlides from './GoogleSlides';
import Illustrator from './Illustrator';
import Indesign from './Indesign';
import LightRoom from './LightRoom';
import PowerPoint from './PowerPoint';
import Photoshop from './Photoshop';
import Sketch from './Sketch';
import XD from './XD';

export const logos = [
  { name: 'figma', el: Figma },
  { name: 'sketch', el: Sketch },
  { name: 'creative cloud', el: CreativeCloud },
  { name: 'illustrator', el: Illustrator },
  { name: 'photoshop', el: Photoshop },
  { name: 'lightroom', el: LightRoom },
  { name: 'indesign', el: Indesign },
  { name: 'after effects', el: AfterEffects },
  { name: 'xd', el: XD },
  { name: 'acrobat', el: Acrobat },
  { name: 'google slides', el: GoogleSlides },
  { name: 'powerpoint', el: PowerPoint },
];

export const logoFilter = (match) =>
  logos.filter((logo) => logo.name === match);
