import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import {
  baseLines, 
  HPLines, 
  WSLines, 
  ELines, 
  GLines, 
  ALines, 
  lineDecoder,
} from './constants';

const useFormRender = () => {
  const renderBaseLines = () => 
    baseLines.map(baseLine => {
      const value = baseLine.substring(0, 2);
      const suffix = lineDecoder[baseLine.substring(2)];
      const content = value + '+' + suffix;
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
      const content = value + '+' + suffix;
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
      if(secondaryValue !== undefined)
        content += ' + ' + secondaryValue + secondaryName;

      if(tertiaryValue !== undefined)
        content += ' + ' + tertiaryValue + tertiaryName; 
  
      return <MenuItem 
        key = {ALine} 
        value={ALine}
      >
        {content}
      </MenuItem>
  }) 
  
  return [
    renderBaseLines,
    renderHPLines,
    renderWSLines,
    renderELines,
    renderGLines,
    renderALines,
    ]
}

export default useFormRender