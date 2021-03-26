import { useState } from 'react';
import {ITEM, CTIER, CUBE, DTIER, DLINES, statItems, tierMap, mathDecoder} from './constants'
import useFormRender from './useFormRender';
import weightedRandom from 'weighted-random';
import math from './Math';

const useForm = () => {
  const [
    renderBaseLines,
    renderHPLines,
    renderWSLines,
    renderELines,
    renderGLines,
    renderALines,
    ] = useFormRender();

  const [form, setForm] = useState({
      [ITEM]: "",
      [CTIER]: "",
      [CUBE]: "",
      [DTIER]: "",
      [DLINES]: "",
    });

  const [results, setResults] = useState({
    cubeCount: 0,
  });

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
    
  const onFormSubmit = e => {
    e.preventDefault();

    setResults({cubeCount: 0});
    const itemCategory = form[ITEM].substring(0, form[ITEM].length - 1);
    const cTierCategory = form[CTIER]; 
    const cubeCategory = form[CUBE];

    const dTierCategory = form[DTIER];
    const dLines = form[DLINES]

    //tier up
    for (let tier = cTierCategory; tier !== 'L' && tier !== dTierCategory; ) {
      const key = cubeCategory + 'tier';
      if (Math.random() < math[key][tierMap[cTierCategory]]) {
        tier = tierMap[tier];
      }
      setResults( ({cubeCount}) => ({cubeCount: cubeCount+1}) )
    }

    //rolling
    for (let successCount = 0; successCount <10000;) {
      const rolledLines = [];
      for (let line = 1; cTierCategory === 'L' && line <= 3; ++line) {
        const equipStats = itemCategory + cTierCategory + line + cubeCategory;
        const data = Object.entries(math[equipStats])
        const weights = data.map(d => d[1]);
        rolledLines.push(data[weightedRandom(weights)][0])
      }
      const countStats =  dLines.length === 3;
      let success = false;
      if(countStats) { //if is stat/hp/allstat
        let statTotal = 0;
        rolledLines.forEach(line => {
          const statPercentage = line.split('_')
          const rolledStat = statPercentage[0];
          const rolledPercentage = parseInt(statPercentage[1]);

          if(rolledStat >= mathDecoder[dLines.substring(2)])
            statTotal += rolledPercentage
        })
        success = statTotal >= parseInt(dLines.substring(0,2)) 
      }else{ //decode desired lines
        const countMap = {}
        for(let char = 0; char < dLines.length; char+=2) {
          countMap[mathDecoder[dLines[char+1]]] = parseInt(dLines[char])
          rolledLines.forEach(line => {
            const statPercentage = line.split('_')
            const rolledStat = statPercentage[0];

            if(countMap.hasOwnProperty(rolledStat)){
              countMap[mathDecoder[dLines[char+1]]] --; //we'll find out
              if(!countMap[mathDecoder[dLines[char+1]]])
                delete countMap[mathDecoder[dLines[char+1]]]
            }
          })
        }
        if(Object.keys(countMap).length === 0)
          success = true
      }
      successCount += success
      // console.log(successCount)
      setResults( ({cubeCount}) => ({cubeCount: cubeCount+1}) )
    }
  }

  return [
    form, results, renderLineOptions, onItemChange, onFormSubmit
  ]

}

export default useForm;