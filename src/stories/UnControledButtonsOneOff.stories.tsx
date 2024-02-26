import { Rating } from "../Rating";
import React, { useState } from 'react';
import { Meta, StoryObj } from "@storybook/react";
import {action} from '@storybook/addon-actions'
import { UnControledButtons } from "../UnControledButtons";

export default{
	title: 'OneOff stories uncontroled',
	component: UnControledButtons
}

export const ButtonsOneOff = () => {
	return (<UnControledButtons />)
}