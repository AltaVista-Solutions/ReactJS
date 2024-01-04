import { fireEvent, render, screen } from '@testing-library/react';
import Demo from './Demo';

test('Test-01',()=>{
    render(<Demo/>)
    const text=screen.getByText('Hello User')
    expect(text).toBeInTheDocument();
})

test('Test-02',()=>{
    render(<Demo name="john"/>)
    const text=screen.getByText('john')
    expect(text).toBeInTheDocument();
})

test('Test-03',()=>{
    render(<Demo />)
    const text=screen.getByText('0')
    expect(text).toBeInTheDocument();
})

test('Test-04',()=>{
    render(<Demo/>)
    const btn=screen.getByRole('button')
    fireEvent.click(btn)
    fireEvent.click(btn)
    const text=screen.getByText('2')
    expect(text).toBeInTheDocument();
})