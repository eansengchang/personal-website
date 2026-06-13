import React from 'react';
import { UserContext } from '../../contexts/User';
import {
  ToggleContainer,
  ToggleWrapper,
  ToggleSwitch,
  Checkbox,
  Label,
  Inner,
  Switch,
} from './ThemeToggleElements';

const ThemeToggle = () => {
  const [, dispatch] = React.useContext(UserContext);

  return (
    <ToggleContainer>
      <ToggleWrapper>
        <ToggleSwitch>
          <Checkbox />
          <Label onClick={() => dispatch({ type: 'toggle_dark_theme' })}>
            <Inner />
            <Switch />
          </Label>
        </ToggleSwitch>
      </ToggleWrapper>
    </ToggleContainer>
  );
};

export default ThemeToggle;
