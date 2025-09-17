import { Patient } from '../../../types/appointments';

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'Gustavo Monção',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: '2',
    name: 'Henrique Domingos',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '3',
    name: 'Isabelly Araujo',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

export const getPatientInfo = (patientId: string): Patient | undefined => {
  return mockPatients.find(patient => patient.id === patientId);
};