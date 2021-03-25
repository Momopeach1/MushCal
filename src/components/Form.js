import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react';
import weightedRandom from 'weighted-random';
import math from './Math';

const Form = () => {
  const ITEM = 'item';
  const CTIER = 'ctier';
  const CUBE = 'cube';
  const DTIER = 'dtier';
  const LINES = 'lines';

  const [form, setForm] = useState({
    [ITEM]: "",
    [CTIER]: "",
    [CUBE]: "",
    [DTIER]: "",
    [LINES]: "",
  });

  const [results, setResults] = useState({
    cubeCount: 0,
  });

  const tierMap = {
    R : 'E',
    E : 'U',
    U : 'L',
  }

  const onFormSubmit = e => {
    e.preventDefault();

    setResults( ({cubeCount}) => ({cubeCount: 0}) )
    const itemCategory = form[ITEM].substring(0, form[ITEM].length - 1);
    const cTierCategory = form[CTIER]; 
    const cubeCategory = form[CUBE];

    const dTierCategory = form[DTIER];

    //tier up
    for (let tier = cTierCategory; tier !== 'L' && tier !== dTierCategory; ) {
      const key = cubeCategory + 'tier';
      if (Math.random() < math[key][tierMap[cTierCategory]]) {
        tier = tierMap[tier];
      }
      setResults( ({cubeCount}) => ({cubeCount: cubeCount+1}) )
    }


    for (let line = 1; cTierCategory === 'L' && line <= 3; ++line) {
      const equipStats = itemCategory + cTierCategory + line + cubeCategory;
      const data = Object.entries(math[equipStats])
      const weights = data.map(d => d[1]);

      console.log(data[weightedRandom(weights)][0]);
    }
  }

  const statItems = new Set([
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

  const baseLines = [
    "21S", "24S", "27S", "30S", "33S","36S",
    "15s", "18s", "21s", "24s", "27s",
  ]

  const HPLines = [
    "21H", "24H","27H","30H","33H","36H",
  ]

  const WSLines = [
    "1A2B", "2A", "2A1B", "2A1I", "3A",
  ]

  const ELines = [
    "2A", "2A1I", "3A",
  ]

  const GLines = [
    "1C",    
    "1C1S", "1C1s", "1C1H",
    "1C2S", "1C2s", "1C2H",
    "2C1S", "2C2s", "2C2H",
  ]

  const ALines = [//paired by same chance
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

  const lineDecoder = {
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

  const renderBaseLines = () => 
    baseLines.map(baseLine => {
      const value = baseLine.substring(0, 2);
      const suffix = lineDecoder[baseLine.substring(2)];
      const content = value + ' ' + suffix;
      return <MenuItem 
        key = {baseLine} 
        value={baseLine}
      >
        {content}
      </MenuItem>
    })

  const renderHPLines = () => 
    HPLines.map(HPLine => {
      const value = HPLine.substring(0, 2);
      const suffix = 'HP%';
      const content = value + ' ' + suffix;
      return <MenuItem 
        key = {HPLine} 
        value={HPLine}
      >
        {content}
      </MenuItem>
    })

  const renderWSLines = () =>
    WSLines.map(WSLine => {
      const primeValue     = WSLine[0]
      const primeName      = 'Line ATT%'
      const secondaryValue = WSLine[2]
      const secondaryName  = lineDecoder[WSLine[3]]
      const content = secondaryValue === undefined ? 
        primeValue + primeName:
        primeValue + primeName + ' + ' + secondaryValue + secondaryName
        
      return <MenuItem 
        key = {WSLine} 
        value={WSLine}
      >
        {content}
      </MenuItem>
    }) 
    
  const renderELines = () => 
    ELines.map(ELine => {
      const primeValue     = ELine[0];
      const primeName      = 'Line ATT%';
      const secondaryValue = ELine[2];
      const secondaryName  = 'Line IED%';
      const content = secondaryValue === undefined ? 
        primeValue + primeName:
        primeValue + primeName + ' + ' + secondaryValue + secondaryName
          
      return <MenuItem 
        key = {ELine} 
        value={ELine}
      >
        {content}
      </MenuItem>
    }) 

  const renderGLines = () => 
    GLines.map(GLine => {
      const primeValue     = GLine[0];
      const primeName      = 'Line Crit DMG%';
      const secondaryValue = GLine[2];
      const secondaryName  = lineDecoder[GLine[3]];
      let content = primeValue + primeName;;
      if(secondaryValue !== undefined)
        content += ' + ' + secondaryValue + secondaryName

      return <MenuItem 
        key = {GLine} 
        value={GLine}
      >
        {content}
      </MenuItem>
  }) 

  const renderALines = () => 
    ALines.map(ALine => {
      const primeValue     = ALine[0];
      const primeName      = lineDecoder[ALine[1]]
      const secondaryValue = ALine[2]
      const secondaryName  = lineDecoder[ALine[3]]; //SAHDM
      const tertiaryValue  = ALine[4]
      const tertiaryName   = lineDecoder[ALine[5]];
      let content = primeValue + primeName;

      //1M1D1S", "1M1D1A", "1M1D1H"
      if(secondaryValue !== undefined){
        if(secondaryName === 'S')
          secondaryName = 'Stat%'
        else if(secondaryName === 'A')
          secondaryName = 'Allstat%'
        else if(secondaryName === 'H')
          secondaryName = 'HP%'
        else if(secondaryName === 'D')
          secondaryName = 'Drop'
        else if(secondaryName === 'M')
          secondaryName = 'Meso'
          content += ' + ' + secondaryValue + secondaryName;
      }

      if(tertiaryValue !== undefined){
        if(tertiaryName === 'S')
          tertiaryName = 'Stat%'
        else if(tertiaryName === 'A')
          tertiaryName = 'Allstat%'
        else if(tertiaryName === 'H')
          tertiaryName = 'HP%'
        content += ' + ' + tertiaryValue + tertiaryName; 
      }
  
      return <MenuItem 
        key = {ALine} 
        value={ALine}
      >
        {content}
      </MenuItem>
  }) 
        
  const renderLineOptions = () => {
    if(statItems.has(form[ITEM])) {
      return renderBaseLines().concat(renderHPLines());
    }else if(form[ITEM] === "W0" || form[ITEM] === "S0" || form[ITEM] === "S1"){
      return renderBaseLines().concat(renderWSLines());
    }else if(form[ITEM] === "E0"){
      return renderBaseLines().concat(renderELines());
    }else if(form[ITEM] === "G0"){
      return renderBaseLines().concat(renderHPLines(), renderGLines());   
    }else if(form[ITEM] === "A0"){
      return renderBaseLines().concat(renderHPLines(), renderALines());   
    } //some default value
  }

  const onItemChange = e => 
      setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <FormControl variant="outlined">
          <Select 
            name={ITEM}
            id="Item dropdown" //for override css
            value={form[ITEM]}
            onChange={onItemChange}
          >
            <MenuItem value=""><em>--select--</em></MenuItem>
            <MenuItem value="A0">Accessory</MenuItem>
            <MenuItem value="C0">Belt</MenuItem>
            <MenuItem value="P0">Bottom</MenuItem>
            <MenuItem value="C1">Cape</MenuItem>
            <MenuItem value="E0">Emblem</MenuItem>
            <MenuItem value="G0">Glove</MenuItem>
            <MenuItem value="H0">Hat</MenuItem>
            <MenuItem value="He0">Heart</MenuItem>
            <MenuItem value="T0">Overall</MenuItem>
            <MenuItem value="T1">Top</MenuItem>
            <MenuItem value="S0">Secondary</MenuItem>
            <MenuItem value="S1">Shield</MenuItem>
            <MenuItem value="F0">Shoes</MenuItem>
            <MenuItem value="C2">Shoulder</MenuItem>
            <MenuItem value="W0">Weapon</MenuItem>
          </Select>
      </FormControl>

      <FormControl variant="outlined">
          <Select 
            name={CTIER}
            id="Tier dropdown" //for override css
            value={form[CTIER]}
            onChange={onItemChange}
          >
            <MenuItem value=""><em>--select--</em></MenuItem>
            <MenuItem value="R">Rare</MenuItem>
            <MenuItem value="E">Epic</MenuItem>
            <MenuItem value="U">Unique</MenuItem>
            <MenuItem value="L">Legendary</MenuItem>
          </Select>
      </FormControl>

      <FormControl variant="outlined">
          <Select 
            name={CUBE}
            id="Cube dropdown" //for override css
            value={form[CUBE]}
            onChange={onItemChange}
          >
            <MenuItem value=""><em>--select--</em></MenuItem>
            <MenuItem value="R">Red</MenuItem>
            <MenuItem value="B">Black</MenuItem>
          </Select>
      </FormControl>

      <FormControl variant="outlined">
          <Select 
            name={DTIER}
            id="Desiredtier dropdown" //for override css
            value={form[DTIER]}
            onChange={onItemChange}
          >
            <MenuItem value=""><em>--select--</em></MenuItem>
            <MenuItem value="R">Rare</MenuItem>
            <MenuItem value="E">Epic</MenuItem>
            <MenuItem value="U">Unique</MenuItem>
            <MenuItem value="L">Legendary</MenuItem>
          </Select>
      </FormControl>

      <FormControl variant="outlined">
          <Select 
            name={LINES}
            id="LinesDesired dropdown" //for override css
            value={form[LINES]}
            onChange={onItemChange}
          >
            {renderLineOptions()}
          </Select>
        </FormControl>
        <input type="submit" />
      </form>

      <div>
          {results.cubeCount}
      </div>
    </div>
  );
}

export default Form;

/*
    drop down menus
    21 stat
    24 stat
    27 stat
    30 stat
    33 stat
    36 stat
    15 AllStat
    18 AllStat
    21 AllStat
    24 AllStat
    27 AllStat

    meso stat //same
    drop stat

    meso AllStat //same
    drop AllStat

    meso meso //same
    drop drop
    meso drop

    meso meso stat //same 
    drop drop stat
    meso drop stat

    meso meso AllStat //same
    meso drop AllStat
    drop drop AllStat

    meso meso drop //same
    meso drop drop

    //WS
    att bdmg bdmg 

    att att
    att att bdmg 
    att att ied

    att att att
    
    //E
    att ied ied
    att att
    att att ied
    att att att
    
*/


/* Math permutations 
 stat/ all lines

   belt       21 = 12 + 9           15 = 9 + 6
   bot        24 = 12 + 12          18 = 9 + 9 / 6 + 6 + 6
   cape       27 = 9 + 9 + 9        21 = 9 + 6 + 6
   hat        30 = 12 + 9 + 9       24 = 9 + 9 + 6
   heart      33 = 12 + 12 +9       27 = 9 + 9 + 9
   overall    36 = 12 + 12 + 12
   shoes
   shoulder
   top

   Accessory
   
   meso stat/all
   drop stat/all
   meso meso
   drop drop
   meso drop / drop meso
   meso drop stat/all
   meso meso stat/all
   drop drop stat/all
   meso meso drop
   meso drop drop

   WSE (emblem doesnt have bdmg)
   
   att
   18 = 9 + 9
   21 = 12 + 9
   24 = 12 + 12
   27 = 9 + 9 + 9
   30 = 12 + 9 + 9
   33 = 12 + 12 + 9
   36 = 12 + 12 + 12
   
   --EMBLEM DONT HAVE BDMG--
   2att + boss
   18 = 9 + 9 + 20BDMG
   18 = 9 + 9 + 30BDMG
   18 = 9 + 9 + 35BDMG
   18 = 9 + 9 + 40BDMG

   21 = 12 + 9 + 20BDMG
   21 = 12 + 9 + 30BDMG
   21 = 12 + 9 + 35BDMG
   21 = 12 + 9 + 40BDMG

   24 = 12 + 12 + 20BDMG
   24 = 12 + 12 + 30BDMG
   24 = 12 + 12 + 35BDMG
   24 = 12 + 12 + 40BDMG

   2att + ied
   18 = 9 + 9 + 35IED
   18 = 9 + 9 + 40IED

   21 = 12 + 9 + 35IED
   21 = 12 + 9 + 40IED

   24 = 12 + 12 + 35IED
   24 = 12 + 12 + 40IED


   //interchangable specific lines
   att12
   att12
   ied
*/

