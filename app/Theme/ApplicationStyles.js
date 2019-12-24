import { Colors, Metrics, verticalScale } from '.';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    normalFooterStyle: {
      backgroundColor: Colors.transparent,
      borderTopWidth: 0,
      elevation: 0,
      marginBottom: verticalScale(20),
    },
    whiteContainer: {
      flex: 1,
      backgroundColor: Colors.whiteContainer,
    },
    noBorderStyle: {
      borderBottomWidth: Metrics.zero,
    },
    topBorderRadius: {
      borderTopLeftRadius: Metrics.textFieldRadius,
      borderTopRightRadius: Metrics.textFieldRadius,
    },
    bottomBorderRadius: {
      borderBottomLeftRadius: Metrics.textFieldRadius,
      borderBottomRightRadius: Metrics.textFieldRadius,
    },
    topLeftBorderRadius: {
      borderTopLeftRadius: Metrics.textFieldRadius,
    },
    topRightBorderRadius: {
      borderTopRightRadius: Metrics.textFieldRadius,
    },
  },
};

export default ApplicationStyles;
