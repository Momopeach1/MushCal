export const ITEM = 'item';
export const CTIER = 'ctier';
export const CUBE = 'cube';
export const DTIER = 'dtier';
export const DLINES = 'dlines';

export const mathDecoder = {
  'S'  : 'Stat',
  's'  : 'AllStat',
  'H'  : 'HP',
  'B'  : 'BDMG',
  'A'  : 'ATT',
  'I'  : 'IED',
  'C'  : 'Cdmg',
  'M'  : 'Meso',
  'D'  : 'Drop',
}

export const statItems = new Set([
  "C0",  //belt,
  "P0",  //bottom,
  "C1",  //cape,
  "H0",  //hat,
  "He0", //heart,
  "T0",  //overall,
  "F0",  //shoes,
  "C2",  //shoulder,
  "T1",  //top,
])

export const baseLines = [
  "21S", "24S", "27S", "30S",// "33S","36S",
  "15s", "18s", "21s", //"24s", "27s",
]

export const HPLines = [
  "21H", "24H","27H","30H",//"33H","36H",
]

export const WSLines = [
  "1A2B", "2A", "2A1B", "2A1I", "3A",
]

export const ELines = [
  "2A", "2A1I", "3A",
]

export const GLines = [
  "1C",    
  "1C1S", "1C1s", "1C1H",
  "1C2S", "1C2s", "1C2H",
  "2C1S", "2C2s", "2C2H",
]

export const ALines = [//paired by same chance
  "1M",   "1D", 
  "1M1S", "1D1S",
  "1M1s", "1D1s",
  "1M1H", "1D1H",

  "2M",     "2D",     "1M1D", 
  "2M1S",   "2M1s",   "2M1H",
  "2D1S",   "2D1s",   "2D1H",
  "1M1D1S", "1M1D1s", "1M1D1H",

  "2M1D", "2D1M", 
]

export const lineDecoder = {
  'S'  : 'Stat%',
  's'  : 'Allstat%',
  'H'  : 'HP%',
  'B'  : 'Line Boss%',
  'A'  : 'Line ATT%',
  'I'  : 'Line IED%',
  'C'  : 'Line Crit DMG%',
  'M'  : 'Line Meso',
  'D'  : 'Line Drop',
}

export const tierMap = {
  R : 'E',
  E : 'U',
  U : 'L',
}