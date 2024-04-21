import { Box, Card, CardContent, Typography, Button } from '@mui/material';

const jobPosts = [
    {
      id: 1,
      title: 'Full Stack Developer',
      description: 'Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.',
      lastUpdated: 'Last updated 2 days ago',
      applyLink: 'https://example.com/apply/full-stack-developer',
      skills: 'HTML, CSS, JavaScript, PHP',
      salary: '100000',
    },
    {
      id: 2,
      title: 'Digital Marketing Specialist',
      description: 'Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.',
      lastUpdated: 'Last updated 1 day ago',
      applyLink: 'https://example.com/apply/digital-marketing-specialist',
      skills: 'Project Management, Data Analysis',
      salary: '75000',
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      description: 'Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.',
      lastUpdated: 'Last updated 4 hours ago',
      applyLink: 'https://example.com/apply/ux-ui-designer',
      skills: 'HTML, CSS, JavaScript and React',
      salary: '90000',
    },
    {
      id: 4,
      title: 'Data Scientist',
      description: 'Leverage advanced analytics and machine learning to uncover insights from vast data sets. Proficiency with Python and R is a must.',
      lastUpdated: 'Last updated 3 days ago',
      applyLink: 'https://example.com/apply/data-scientist',
      skills: 'Machine Learning and Python',
      salary: '120000',
    },
    {
      id: 5,
      title: 'Customer Support Representative',
      description: 'Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key.',
      lastUpdated: 'Last updated 6 hours ago',
      applyLink: 'https://example.com/apply/customer-support-representative',
      skills: 'Communication, Active listening and Problem solving',
      salary: '80000',
    }
];  

function JobListings() {
    return (
      <>
        <Typography
          variant="h2"
          gutterBottom
          fontWeight="bold"
          textAlign="center"
          sx={{
            fontSize: '2.5rem',
            mt: 8,
            mb: 4,
          }}
        >
          Job Listings
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {jobPosts.map((jobPost) => (
            <Card key={jobPost.id} sx={{ maxWidth: 250, margin: 2 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                        {jobPost.title}
                    </Typography>
                    
                    <Typography variant="body1" gutterBottom>
                        <b>Description:</b> {jobPost.description}
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <b>Required Skills :</b> {jobPost.skills}
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <b>Salary:</b> ${jobPost.salary}
                    </Typography>

                    <Typography variant="body1" gutterBottom fontWeight="bold">
                        {jobPost.lastUpdated}
                    </Typography>

                    <Button variant="contained" color="primary" href={jobPost.applyLink}>
                        Apply Now
                    </Button>
                </CardContent>
            </Card>
            ))}
        </Box>
      </>
    );
};
  

export default JobListings

