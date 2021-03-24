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
                        <MenuItem value=""><em>--select--</em></MenuItem>
                        <MenuItem value="A0">Any(tier up)</MenuItem>
                        
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