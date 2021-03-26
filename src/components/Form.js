import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
  ITEM, 
  CTIER, 
  CUBE, 
  DTIER, 
  DLINES, 
} from './constants';
import useForm from './useForm';

const Form = () => {
  const [form, results, renderLineOptions, onItemChange, onFormSubmit] = useForm()

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <FormControl variant="outlined">
          <Select 
            name={ITEM}
            id="Item dropdown" //for override css
            value={form[ITEM]}
            onChange={onItemChange}
            required
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
            required
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
            required
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
            required
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
            name={DLINES}
            id="LinesDesired dropdown" //for override css
            value={form[DLINES]}
            onChange={onItemChange}
            required
          >
            {renderLineOptions()}
          </Select>
        </FormControl>
        <input type="number" name="N" value = {100}/>
        <input type="submit" />
      </form>

      <div>
        {results.cubeCount / 10000}
      </div>
    </div>
  );
}

export default Form;

