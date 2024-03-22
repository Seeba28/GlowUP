import { StyleSheet } from "react-native";
import { colors } from "../../../services/utilities/colors";
import { sizes } from "../../../services/utilities/sizes";
import { fontSize } from "../../../services/utilities/fonts";

export const styles = StyleSheet.create({
    productBakcground: {
        backgroundColor: colors.background,
        height: sizes.screenHeight
    },
    heading: {
        marginTop: sizes.screenHeight * 0.06,
        paddingStart: sizes.screenWidth * 0.05,
        color: colors.black,
        fontSize: fontSize.h4,
        fontWeight: '600'
    }
})