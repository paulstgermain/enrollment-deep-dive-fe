import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import Typography from "@mui/material/Typography";

export default function LandingCard({ header, number, blurb }) {

    return (
        <Card sx={{ width: 275, height: 200, marginBottom: '15px', marginRight: '15px', display: 'flex', justifyContent: 'center' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography sx={{ mt: 2.5, fontSize: '64px' }}>
                    { number }
                    </Typography>
                    <Typography variant="h6">
                    { header }
                    </Typography>
                </CardContent>
            </Card>
    )
}