import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {

  return (
    <PieChart
    colors={['#5E686D', "#A9BFA8", "#205295", "#022C43", "#FFD700"]}
      series={[
        {
          data: [
            { id: 0, value: 10, label: '1 rating' },
            { id: 1, value: 15, label: '2 rating' },
            { id: 2, value: 20, label: '3 rating' },
            { id: 3, value: 20, label: '4 rating' },
            { id: 4, value: 20, label: '5 rating' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}