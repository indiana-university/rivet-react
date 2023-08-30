/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import * as RRAlert from '../src/components/Alert/index';
import { Badge } from '../src/components/PageContent/index';
import { Breadcrumbs } from '../src/components/Breadcrumbs/index'
import * as RRButton from '../src/components/Button/index';
import { Checkbox } from '../src/components/Checkbox/index'
import * as RRDialog from '../src/components/Dialog/index';
import * as RRDropdown from '../src/components/Dropdown/index';
import { EmptyState } from '../src/components/EmptyState/index';
import { File } from '../src/components/File/index';
import * as RRFooter from '../src/components/Footer/index';
import * as RRGrid from '../src/components/Grid/index';
import * as RRHeader from '../src/components/Header/index';
import * as RRList from '../src/components/List/index';
import * as RRInput from '../src/components/Input/index';
import { LoadingIndicator } from '../src/components/LoadingIndicator/index';
import { RadioButton } from '../src/components/RadioButton/index';
import { Table } from '../src/components/Table/index';

export const { DismissibleAlert, Alert, InlineAlert } = RRAlert;
export { Badge };
export { Breadcrumbs };
export const { Button, ButtonGroup, SegmentedButton } = RRButton;
export { Checkbox };
export const { Dialog, DialogBody, DialogControls } = RRDialog;
export const { Dropdown, DropdownGroup } = RRDropdown;
export { EmptyState };
export { File };
export const {
    BaseFooter, ResourceFooter, ResourceFooterLinkBlock, ResourceFooterTextBlock, SocialMediaFooter,
    SocialMediaFooterLink, StandardFooter
} = RRFooter;
export const { Col, Container, Row } = RRGrid;
export const {
    Header, HeaderAvatar, HeaderMenu, HeaderNavigation, HeaderNavigationSecondary, HeaderSearch
} = RRHeader;
export const { DescriptionList, List } = RRList;
export const { Input, Textarea, Select } = RRInput;
export { LoadingIndicator };
export { RadioButton };
export { Table };
