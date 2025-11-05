import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
} from '@mui/lab';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolIcon from '@mui/icons-material/School';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';

const CareerTimeline = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Timeline>
            <TimelineItem>
                {!isMobile && (
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        Sep 2023 - Present
                    </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="filled">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                    sx={{ py: '12px', m: 'auto 0' }}
                    variant="body2"
                >
                    <Typography>
                        Lowe's India
                    </Typography>
                    <Typography color="text.secondary">
                        Software Engineer
                    </Typography>
                    {isMobile && (
                        <Typography variant="body2" color="text.secondary">
                            Sep 2023 - Present
                        </Typography>
                    )}
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                {!isMobile && (
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        Aug 2021 - Sep 2023
                    </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="filled">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                    sx={{ py: '12px', m: 'auto 0' }}
                    variant="body2"
                >
                    <Typography>
                        Lowe's India
                    </Typography>
                    <Typography color="text.secondary">
                        Associate Software Engineer
                    </Typography>
                    {isMobile && (
                        <Typography variant="body2" color="text.secondary">
                            Aug 2021 - Sep 2023
                        </Typography>
                    )}
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                {!isMobile && (
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        2017 - 2021
                    </TimelineOppositeContent>
                )}
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="filled">
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent
                    sx={{ py: '12px', m: 'auto 0' }}
                    variant="body2"
                >
                    <Typography>
                        New Horizon College of Engineering
                    </Typography>
                    <Typography color="text.secondary">
                        BE in Computer Science
                    </Typography>
                    {isMobile && (
                        <Typography variant="body2" color="text.secondary">
                            2017-2021
                        </Typography>
                    )}
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export default CareerTimeline;