import { DataGrid } from "@mui/x-data-grid";
import { useData } from "@/context/dataContext";
import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip'
import HelpIcon from '@mui/icons-material/Help';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from "@mui/material/Typography";
import LandingCard from "@/components/layout/LandingCard";

export default function DataTable() {
	const { state } = useData();
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const handleOpen = (row) => {
        setSelectedRow(row);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const columns = [
        { field: "id", headerName: "ID", type: "number", width: 30 },
        { 
            field: "filename",
            headerName: "Filename",
            width: 150,
        },
        {
            field: "motivation",
            headerName: "Motivation",
            type: "boolean",
            width: 130,
            valueGetter: (params) =>
                params.row.ec_checklist.motivation,
        },
        {
            field: "time_commitment",
            headerName: "Commitment",
            type: "boolean",
            width: 130,
            valueGetter: (params) =>
                params.row.ec_checklist.time_commitment,
        },
        {
            field: "value_props",
            headerName: "Value Props",
            type: "boolean",
            width: 70,
            valueGetter: (params) => params.row.ec_checklist.value_props,
        },
        {
            field: "competitors",
            headerName: "Competitors",
            type: "boolean",
            width: 130,
            valueGetter: (params) =>
                params.row.ec_checklist.competitors,
        },
        {
            field: "schedule_call",
            headerName: "Follow Up",
            type: "boolean",
            width: 130,
            valueGetter: (params) =>
                params.row.ec_checklist.schedule_call,
        },
        {
            field: "demo",
            headerName: "Demo",
            type: "boolean",
            width: 130,
            valueGetter: (params) =>
                params.row.ec_checklist.demo,
        },
        {
            field: "complete_enrollment",
            headerName: "Enrollment",
            type: "boolean",
            width: 130,
            valueGetter: (params) =>
                params.row.ec_checklist.complete_enrollment,
        },
        {
            field: "good_overview",
            headerName: "Overview",
            type: "boolean",
            width: 130,
            valueGetter: (params) =>
                params.row.ec_checklist.good_overview,
        },
        {
            field: "objections",
            headerName: "Objections",
            type: "boolean",
            width: 130,
            valueGetter: (params) =>
                params.row.ec_checklist.objections,
        },
        {
            field: 'view_details',
            headerName: "View Details",
            width: 160,
            renderCell: (params) => (
                <Button variant="contained" color="primary" onClick={() => handleOpen(params.row)}>View Details</Button>
            )
        }
    ];

    console.log(state);

	return (
		<div
			style={{
				display: "flex",
                flexDirection: 'column',
				justifyContent: "center",
				marginTop: "25px",
                marginLeft: "50px",
                marginBottom: "50px",
                marginRight: "50px"
			}}
		>
            <div>
                <LandingCard header="Calls on Record" number={state.totalCalls} />
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-evenly' }}>
                <LandingCard header="A. Are we asking learners what motivated them to look into BloomTech?" number={state.checklistPercent["A"]} />
                <LandingCard header="B. Are we informing learners of the weekly time commitment and the length of the program?" number={state.checklistPercent["B"]} />
                <LandingCard header="C. Are they reviewing the value props: job or money back guarantee, flexibility, beginner friendly, try before you buy (Risk Free Trial)?" number={state.checklistPercent["C"]} />
                <LandingCard header="D. Are we asking learners if they are looking into competitors?" number={state.checklistPercent["D"]} />
                <LandingCard header="E. Are they scheduling another call with the learner?" number={state.checklistPercent["E"]} />
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-evenly' }}>
                <LandingCard header="F. Are we offering to demo the product?" number={state.checklistPercent["F"]} />
                <LandingCard header="G. Are we tasking the learner to complete enrollment and engage with the product?" number={state.checklistPercent["G"]} />
                <LandingCard header="H. Do we provide a good overview of the program, tuition options, and expectations?" number={state.checklistPercent["H"]} />
                <LandingCard header="I. Are the coaches attempting to overcome objections?" number={state.checklistPercent["I"]} />
            </div>
			{state.data && (
				<div style={{ height: 'auto', width: "auto" }}>
					<DataGrid
						rows={state.realData}
						columns={columns}
						initialState={{
							pagination: {
								paginationModel:
									{
										page: 0,
										pageSize: 5,
									},
							},
						}}
					/>
				</div>
			)}
            <Modal open={open} onClose={handleClose} style={{ overflow: 'hidden' }}>
                <Box sx={{ width: '60%', height: '70%', p: 2, bgcolor: 'background.paper', margin: 'auto', marginTop: '60px' }}>
                    {selectedRow &&
                        <div style={{ zIndex: 10, position: 'absolute' }}>
                            <h2>Details for enrollment call: {selectedRow.filename}</h2>
                            {/* <h3>EC: {selectedRow.enrollment_coach}</h3>
                            <p><b>Summary:</b> {selectedRow.fireflies_summary}</p> */}
                            {/* <div style={{ display: 'flex' }}>
                                <p style={{ marginTop: '-1px', marginRight: '5px', fontWeight: 'bold' }}>Keywords: </p>
                                {selectedRow.fireflies_keywords.map((i) => {
                                    return <Chip key={i} label={i} size="small" />
                                })}
                            </div>
                            <p><b>Transcript:</b> {selectedRow.transcript}</p>
                            <p><b>Questions from lead:</b> {selectedRow.questions_from_lead.map((i) => {
                                return <p key={i} style={{marginLeft: '15px'}}>{i}</p>
                            })}</p> */}
                            <p style={{fontWeight: 'bold'}}>
                                EC Checklist:
                                <Tooltip title="Green = Question asked / Red = Question missed">
                                    <HelpIcon fontSize="small" />
                                </Tooltip>
                            </p>
                            <div>
                                {
                                    selectedRow.ec_checklist.motivation === true ? <Chip sx={{marginLeft: '5px'}} label="Motivation" color="success" /> :
                                    <Chip sx={{marginLeft: '5px'}} label="Motivation" color="error" />
                                }
                                {
                                    selectedRow.ec_checklist.time_commitment === true ? <Chip sx={{marginLeft: '5px'}} label="Commitment" color="success" /> :
                                    <Chip sx={{marginLeft: '5px'}} label="Commitment" color="error" />
                                }
                                {
                                    selectedRow.ec_checklist.value_props === true ? <Chip sx={{marginLeft: '5px'}} label="Value Props" color="success" /> :
                                    <Chip sx={{marginLeft: '5px'}} label="Value Props" color="error" />
                                }
                                {
                                    selectedRow.ec_checklist.competitors === true ? <Chip sx={{marginLeft: '5px'}} label="Competitors" color="success" /> :
                                    <Chip sx={{marginLeft: '5px'}} label="Competitors" color="error" />
                                }
                                {
                                    selectedRow.ec_checklist.schedule_call === true ? <Chip sx={{marginLeft: '5px'}} label="Follow Up" color="success" /> :
                                    <Chip sx={{marginLeft: '5px'}} label="Follow Up" color="error" />
                                }
                                {
                                    selectedRow.ec_checklist.demo === true ? <Chip sx={{marginLeft: '5px'}} label="Demo" color="success" /> :
                                    <Chip sx={{marginLeft: '5px'}} label="Demo" color="error" />
                                }
                                {
                                    selectedRow.ec_checklist.complete_enrollment === true ? <Chip sx={{marginLeft: '5px'}} label="Enrollment" color="success" /> :
                                    <Chip sx={{marginLeft: '5px'}} label="Enrollment" color="error" />
                                }
                                {
                                    selectedRow.ec_checklist.good_overview === true ? <Chip sx={{marginLeft: '5px'}} label="Overview" color="success" /> :
                                    <Chip sx={{marginLeft: '5px'}} label="Overview" color="error" />
                                }
                                {
                                    selectedRow.ec_checklist.objections === true ? <Chip sx={{marginLeft: '5px'}} label="Objections" color="success" /> :
                                    <Chip sx={{marginLeft: '5px'}} label="Objections" color="error" />
                                }
                                <h3>Transcript:</h3>
                                <Typography component="div"
                                    sx={{ px: 4, mt: 2, maxHeight: "40vh", overflowY: "auto", maxWidth: '74%' }}
                                >
                                    {
                                        selectedRow.transcript.map((line) => {
                                            return (<p key={selectedRow.id} >{line}</p>)
                                        })
                                    }
                                </Typography>
                            </div>
                        </div>
                    }
                </Box>
            </Modal>
		</div>
	);
}
