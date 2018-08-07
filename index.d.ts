declare module 'react-native-collapsible-toolbar' {
  import * as React from 'react';
  import {
    ViewStyle,
    TextStyle,
    ImageURISource
  } from 'react-native';

  export interface CollapsibleToolbarProps extends React.Props<CollapsibleToolbar> {
    collapsedNavBarBackgroundColor?: string;
    imageSource?: string;
    onContentScroll?: () => void;
    renderContent: () => JSX.Element;
    renderNavBar:() => JSX.Element;
    renderToolBar:() => JSX.Element,
    toolBarHeight: number;
    translucentStatusBar: boolean,
  }

  export default class CollapsibleToolbar extends React.Component<CollapsibleToolbarProps>  {

  }

}

