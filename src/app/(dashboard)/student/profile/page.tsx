import Section from '@/components/section';
import { Input } from '@/components/ui/input';
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from '@/components/ui/label';
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type profileInfoDataType = {
    label: string,
    value: string,
    type: string,
    options?: string[]
}

type profileDataType = {
    label: string,
    info: profileInfoDataType[]
}

const Profile = () => {
    const profileData: profileDataType[] = [
        {
            label: 'Student Profile',
            info: [
                {
                    label: 'Campus',
                    value: 'Barasat',
                    type: 'text',
                },
                {
                    label: 'Student Code',
                    value: 'BWU/BCA/23/406',
                    type: 'text',
                },
                {
                    label: 'University Email',
                    value: 'bwubca23406@brainwareuniversity.ac.in',
                    type: 'email',
                },
                {
                    label: 'Batch Code',
                    value: 'BCA-2023-SEC-G (Gr - 2)',
                    type: 'text',
                },
                {
                    label: 'First Name',
                    value: 'RAHUL',
                    type: 'text',
                },
                {
                    label: 'Middle Name',
                    value: '',
                    type: 'text',
                },
                {
                    label: 'Surname',
                    value: 'DAS',
                    type: 'text',
                },
                {
                    label: 'Residence Phone',
                    value: '',
                    type: 'number',
                },
                {
                    label: 'Mobile 1',
                    value: '9775150082',
                    type: 'number',
                },
                {
                    label: 'Mobile 2',
                    value: '9609337209',
                    type: 'number',
                },
                {
                    label: 'Blood Group',
                    value: 'NA',
                    type: 'select',
                    options: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'NA'],
                },
                {
                    label: 'Height',
                    value: '0',
                    type: 'number',
                },
                {
                    label: 'Weight',
                    value: '0',
                    type: 'number',
                },
                {
                    label: 'Date of Birth',
                    value: '2004-10-21',
                    type: 'date',
                },
                {
                    label: 'Place of Birth',
                    value: '',
                    type: 'text',
                },
                {
                    label: 'Career Goal',
                    value: 'Software Engineer',
                    type: 'text',
                },
                {
                    label: 'Religion',
                    value: 'Hinduism',
                    type: 'select',
                    options: ['Hinduism', 'Islam', 'Christianity', 'Buddhism', 'Judaism', 'Other'],
                },
                {
                    label: 'Caste',
                    value: 'General',
                    type: 'text',
                },
                {
                    label: 'Nationality',
                    value: 'Indian',
                    type: 'text',
                },
                {
                    label: 'Major Disease',
                    value: '',
                    type: 'text',
                },
                {
                    label: 'Why Choose This Course',
                    value: 'Following My Passion',
                    type: 'text',
                },
                {
                    label: 'Student ABC ID',
                    value: '299287290864',
                    type: 'text',
                },
                {
                    label: 'Hobby',
                    value: 'Acting',
                    type: 'checkbox',
                    options: ["Acting", "Cooking", "Dance", "Drama", "Embroidery", "Indoor Game", "Movie", "Music", "Painting", "Photography", "Poem", "Tubbing"],
                }
            ]
        },
        {
            label: 'Present Address Details',
            info: [
                {
                    label: 'Present Address',
                    value: 'KANKPUL, ASHOKENAGAR KALYANGARH (M) NORTH 24 PGS, WEST BENGAL 743272',
                    type: 'textarea'
                },
                {
                    label: 'City / Town',
                    value: 'KANKPUL',
                    type: 'text'
                },
                {
                    label: 'Area',
                    value: 'KALYANGARH',
                    type: 'text'
                },
                {
                    label: 'District (for W.B only)',
                    value: 'North 24 Parganas',
                    type: 'text'
                },
                {
                    label: 'P.O',
                    value: 'KANKPUL',
                    type: 'text'
                },
                {
                    label: 'P.S',
                    value: 'ASHOKENAGAR',
                    type: 'text'
                },
                {
                    label: 'Aadhar Card No.',
                    value: '331513203666',
                    type: 'number'
                },
                {
                    label: 'State',
                    value: 'West Bengal',
                    type: 'text'
                },
                {
                    label: 'Pin',
                    value: '743272',
                    type: 'number'
                }
            ]
        },
        {
            label: 'Permanent Address Details',
            info: [
                {
                    label: 'Permanent Address',
                    value: 'KANKPUL, ASHOKENAGAR KALYANGARH (M) NORTH 24 PGS, WEST BENGAL 743272',
                    type: 'textarea'
                },
                {
                    label: 'City / Town',
                    value: 'KANKPUL',
                    type: 'text'
                },
                {
                    label: 'District (for W.B only)',
                    value: 'North 24 Parganas',
                    type: 'text'
                },
                {
                    label: 'P.O',
                    value: 'KANKPUL',
                    type: 'text'
                },
                {
                    label: 'P.S',
                    value: 'ASHOKENAGAR',
                    type: 'text'
                },
                {
                    label: 'Aadhar Card No.',
                    value: '331513203666',
                    type: 'number'
                },
                {
                    label: 'State',
                    value: 'West Bengal',
                    type: 'text'
                },
                {
                    label: 'Pin',
                    value: '743272',
                    type: 'number'
                }
            ]
        },
        {
            label: 'Contact Details',
            info: [
                {
                    label: 'Email',
                    value: 'rd21102004@gmail.com',
                    type: 'email'
                },
                {
                    label: 'FB Account No',
                    value: '',
                    type: 'text'
                },
                {
                    label: 'Whatsapp No',
                    value: '9775150082',
                    type: 'number'
                }
            ]
        },
        {
            label: 'Qualification Details',
            info: [
                {
                    label: 'Institution of Class X',
                    value: 'KALYANGARH BIDHANCHANDRA VIDYAPITH',
                    type: 'text'
                },
                {
                    label: 'Board of Class X',
                    value: 'WEST BENGAL BOARD',
                    type: 'text'
                },
                {
                    label: 'Medium of Class X',
                    value: 'Bengali',
                    type: 'text'
                },
                {
                    label: 'Percentage of Class X',
                    value: '91.14',
                    type: 'number'
                },
                {
                    label: 'Year of Passing',
                    value: '',
                    type: 'text'
                },
                {
                    label: 'Institution of Class XII',
                    value: 'KALYANGARH VIDYAMANDIR',
                    type: 'text'
                },
                {
                    label: 'Board of Class XII',
                    value: 'WEST BENGAL COUNCIL OF HIGHER SECONDARY EDUCATION',
                    type: 'text'
                },
                {
                    label: 'Medium of Class XII',
                    value: 'Bengali',
                    type: 'text'
                },
                {
                    label: 'Percentage of Class XII',
                    value: '82.2',
                    type: 'number'
                },
                {
                    label: 'Year of Passing',
                    value: '',
                    type: 'text'
                },
                {
                    label: 'Institution of Graduation',
                    value: '',
                    type: 'text'
                },
                {
                    label: 'Board of Graduation',
                    value: '',
                    type: 'text'
                },
                {
                    label: 'Medium of Graduation',
                    value: '',
                    type: 'text'
                },
                {
                    label: 'Percentage of Graduation',
                    value: '0',
                    type: 'number'
                },
                {
                    label: 'Year of Passing',
                    value: '',
                    type: 'text'
                }
            ]
        },
        {
            label: 'Guardian Details',
            info: [
                {
                    label: 'Father\'s Name',
                    value: 'Mr. PRADIP DAS',
                    type: 'text'
                },
                {
                    label: 'Father\'s Mobile',
                    value: '9563066913',
                    type: 'number'
                },
                {
                    label: 'Father\'s E-Mail',
                    value: 'pdas34563@gmail.com',
                    type: 'email'
                },
                {
                    label: 'Father\'s Profession',
                    value: 'Self-employed',
                    type: 'text'
                },
                {
                    label: 'Mother\'s Name',
                    value: 'Mrs. ARPITA DAS',
                    type: 'text'
                },
                {
                    label: 'Mother\'s Contact No',
                    value: '9609337209',
                    type: 'number'
                },
                {
                    label: 'Mother\'s Profession',
                    value: 'Housewife',
                    type: 'text'
                },
                {
                    label: 'Mother\'s E-Mail',
                    value: 'pdas34563@gmail.com',
                    type: 'email'
                },
                {
                    label: 'No Of Brother(s)',
                    value: '0',
                    type: 'number'
                },
                {
                    label: 'No Of Sister(s)',
                    value: '0',
                    type: 'number'
                },
                {
                    label: 'Hostel Border',
                    value: '',
                    type: 'radio',
                    options: ['Yes', 'No']
                }
            ]
        },
        {
            label: 'Local Guardian Details',
            info: [
                {
                    label: 'Local Guardian Name',
                    value: '',
                    type: 'text'
                },
                {
                    label: 'Local Guardian Contact',
                    value: '',
                    type: 'text'
                },
                {
                    label: 'Local Guardian Mobile',
                    value: '',
                    type: 'number'
                }
            ]
        }
    ];

    return (
        <Section>
            <div className='w-full text-center text-xl'>
                Profile
            </div>
            <div className='bg-accent p-4 rounded-md shadow-md text-xs flex flex-col gap-4'>
                {
                    profileData.map((section, index) => (
                        <ProfileSection key={index} item={section} />
                    ))
                }
            </div>
        </Section>
    )
}

const ProfileSection = ({ item }: { item: profileDataType }) => {
    return (
        <div className='flex flex-col'>
            <div className="text-base pb-2">
                {item.label}
            </div>
            <hr />
            <div className="grid grid-cols-1 lg:grid-cols-2 ${info.type === 'checkbox' ? 'col-span-2' : ''} gap-4 lg:gap-12 p-4 my-4">
                {
                    item.info.map((info: profileInfoDataType, index: number) => (
                        <div key={index} className={`grid grid-cols-1 xl:grid-cols-[minmax(auto,_auto)_1fr] gap-4 items-center ${info.type === 'checkbox' ? 'col-span-2' : ''}`}>
                            <Label className='' htmlFor={info.label}>
                                {info.label}:
                            </Label>
                            {
                                info.type === 'select' ? (
                                    <Select value={info.value} disabled>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder={info.value} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {info.options?.map((option: string) => (
                                                <SelectItem key={option} value={option} >
                                                    {option}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                ) : info.type === 'checkbox' ? (
                                    <div className="flex items-center gap-3 flex-wrap" id={info.label}>
                                        {info.options?.map((option: string) => (
                                            <div className="flex items-center space-x-1" key={option}>
                                                <Checkbox id="terms" checked={info.value.includes(option)} />
                                                <Label htmlFor="terms" className='font-normal text-xs'>
                                                    {option}
                                                </Label>
                                            </div>
                                        ))}
                                    </div>
                                ) : info.type === 'textarea' ? (
                                    <Textarea placeholder={info.value} id={info.label} />
                                ) : info.type === 'radio' ? (
                                    <RadioGroup defaultValue={info.value} className='flex' disabled>
                                        {
                                            info.options?.map((option: string) => (
                                                <div className="flex items-center space-x-1" key={option}>
                                                    <RadioGroupItem value={option} id={option} />
                                                    <Label htmlFor={option} className='font-normal text-sm'>
                                                        {option}
                                                    </Label>
                                                </div>
                                            ))
                                        }
                                    </RadioGroup>

                                ) : (
                                    <Input
                                        id={info.label}
                                        type={info.type}
                                        className="text-xs"
                                        value={info.value}
                                        readOnly
                                    />
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Profile