import React from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, FieldPath } from 'react-hook-form'
import z from 'zod'
import { authformSchema } from '@/lib/utils'

const formSchema = authformSchema('sign-up'); 

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,  
    placeholder: string
}

function CustomInput({control,name,label,placeholder}:CustomInput) {
  return (
    <section>
         <FormField
                    control={control}
                    name={name}
                    render={({ field }) => (
                       <div className='form-item'>
                            <FormLabel className='form-label'>
                                {label}
                            </FormLabel>
                            <div className='flex w-full flex-col'>
                                <FormControl>
                                    <Input 
                                        placeholder={placeholder}
                                        className='input-class'
                                        {...field}
                                        type={name === 'password' ? 'password' : 'text'}
                                    />
                                </FormControl>
                                <FormMessage 
                                    className='form-message mt-2'
                                />
                            </div>
                       </div>
                    )}
                    />
    </section>
  )
}

export default CustomInput