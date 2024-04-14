import {Accordion, AccordionDetails, AccordionSummary, Stack, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import {Review} from "../../types/movieTypes";

//Компонент для рендера каждого отзыва
const ReviewsItem = ({review}: { review: Review }) => {

    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Stack direction={"row"} alignItems={"center"}>
                    <Typography variant={"h5"}>{review.title || "Без названия"}</Typography>
                    <Typography variant={"body1"}>{review.type === "Позитивный" ?
                        <SentimentSatisfiedAltIcon color={"success"}/> : review.type === "Негативный" ?
                            <SentimentVeryDissatisfiedIcon color={"error"}/> : <SentimentNeutralIcon/>}</Typography>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant={"h6"}>{review.author}</Typography>
                <Typography variant={"body1"}>{review.review}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default ReviewsItem;