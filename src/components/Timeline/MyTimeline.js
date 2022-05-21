import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import EventIcon from '@mui/icons-material/Event';

import { Typography } from '@mui/material';

const MyTimeline = ({ timelines = [] }) => {
    return (
        <div>
            <Timeline position="alternate">
                {timelines.map((item, index) => {
                    return (<>
                        <TimelineItem key={index}>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                            >
                                {item.date}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                <TimelineDot>
                                    <EventIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h6" component="span">
                                    {item.title}
                                </Typography>
                                <Typography>{item.description}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </>
                    )
                })}
            </Timeline>
        </div>
    )
}

export default MyTimeline