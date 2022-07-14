import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CButton,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormLabel,
  CFormInput,
  CFormCheck,
  CFormSelect
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilPlus, cilXCircle } from '@coreui/icons';
const Memos = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modalKota, setModalKota] = useState(false);
  const [modalKotaTujuan, setModalKotaTujuan] = useState(false);

  const [memoDari, setMemoDari] = useState('');
  const [noMemoTerakhir, setNoMemoTerakhir] = useState('');
  const [noMemo, setNoMemo] = useState('');
  const [noMemoRest, setNoMemoRest] = useState('');
  const [approvalOleh, setApprovalOleh] = useState('');
  const [tglMemo, setTglMemo] = useState('14-Juli-2022');
  const [memoKepada, setMemoKepada] = useState('Manager Administrasi');
  const [plafonAnggaran, setPlafonAnggaran] = useState('100.000.000');
  const [memoComplete, setMemoComplete] = useState(0);
  const [realisasiAnggaranOnProcess, setRealisasiAnggaranOnProcess] =
    useState(0);
  const [realiasiAnggaran, setRealiasiAnggaran] = useState('81.600.562');
  const [sisaAnggaran, setSisaAnggaran] = useState('18.400.210');
  const [dariTujuan, setDariTujuan] = useState('');
  const [keTujuan, setKeTujuan] = useState('');
  const [startDate, setStartDate] = useState('07-07-2022');
  const [endDate, setEndDate] = useState('09-07-2022');

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Surat Memo</strong>{' '}
              <CButton
                className="float-end"
                color="dark"
                shape="rounded-0"
                size="sm"
                onClick={() => setVisible(!visible)}
              >
                + Memo
              </CButton>
            </CCardHeader>
            <CCardBody>
              <CTable responsive="lg" striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                    <CTableHeaderCell scope="col">No. Memo</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Grup</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tipe</CTableHeaderCell>
                    <CTableHeaderCell scope="col">
                      Maksud & Tujuan
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col">Approval</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Peserta ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Memo Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Persetujuan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Tujuan</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Start Date</CTableHeaderCell>
                    <CTableHeaderCell scope="col">End Date</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableHeaderCell scope="row"></CTableHeaderCell>
                    <CTableDataCell
                      style={{
                        'word-wrap': 'break-word',
                        'max-width': '150px',
                        'min-width': '150px'
                      }}
                    >
                      No.263.MEMO/VI/BPS/EDU/2022
                    </CTableDataCell>
                    <CTableDataCell>DOMESTIK</CTableDataCell>
                    <CTableDataCell>JABATAN</CTableDataCell>
                    <CTableDataCell>
                      Self Assesment PROPER Biru PT Indonesia Power
                    </CTableDataCell>
                    <CTableDataCell>Iedho Khrisna Lucky</CTableDataCell>
                    <CTableDataCell>Anisa Triyanti</CTableDataCell>
                    <CTableDataCell>97012839</CTableDataCell>
                    <CTableDataCell>06-Juni-2022</CTableDataCell>
                    <CTableDataCell>Sudah</CTableDataCell>
                    <CTableDataCell>Kota Denpasar</CTableDataCell>
                    <CTableDataCell>10-Juni-2022</CTableDataCell>
                    <CTableDataCell>12-Juni-2022</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row"></CTableHeaderCell>
                    <CTableDataCell
                      style={{
                        'word-wrap': 'break-word',
                        'max-width': '150px',
                        'min-width': '150px'
                      }}
                    >
                      No.201.MEMO/VI/BPS/EDU/2022
                    </CTableDataCell>
                    <CTableDataCell>DOMESTIK</CTableDataCell>
                    <CTableDataCell>JABATAN</CTableDataCell>
                    <CTableDataCell>
                      Self Assesment PROPER Biru PT Indonesia Power
                    </CTableDataCell>
                    <CTableDataCell>Iedho Khrisna Lucky</CTableDataCell>
                    <CTableDataCell>Abdul</CTableDataCell>
                    <CTableDataCell>97012839</CTableDataCell>
                    <CTableDataCell>06-Juni-2022</CTableDataCell>
                    <CTableDataCell>Sudah</CTableDataCell>
                    <CTableDataCell>Kota Makasar</CTableDataCell>
                    <CTableDataCell>10-Juni-2022</CTableDataCell>
                    <CTableDataCell>12-Juni-2022</CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableHeaderCell scope="row"></CTableHeaderCell>
                    <CTableDataCell
                      style={{
                        'word-wrap': 'break-word',
                        'max-width': '150px',
                        'min-width': '150px'
                      }}
                    >
                      No.100.MEMO/VI/BPS/EDU/2022
                    </CTableDataCell>
                    <CTableDataCell>DOMESTIK</CTableDataCell>
                    <CTableDataCell>JABATAN</CTableDataCell>
                    <CTableDataCell>
                      Self Assesment PROPER Biru PT Indonesia Power
                    </CTableDataCell>
                    <CTableDataCell>Iedho Khrisna Lucky</CTableDataCell>
                    <CTableDataCell>Joko</CTableDataCell>
                    <CTableDataCell>60012839</CTableDataCell>
                    <CTableDataCell>01-Juni-2022</CTableDataCell>
                    <CTableDataCell>Sudah</CTableDataCell>
                    <CTableDataCell>Kota Bandung</CTableDataCell>
                    <CTableDataCell>04-Juni-2022</CTableDataCell>
                    <CTableDataCell>07-Juni-2022</CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CModal size="lg" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Step 1: Asal Memo</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CRow className="mb-12">
              <CFormLabel
                htmlFor="inputTanggal"
                className="col-sm-3 col-form-label text-end"
              >
                Tanggal Memo:
              </CFormLabel>
              <CCol sm={3}>
                <CFormInput
                  id="inputTanggal"
                  value={tglMemo}
                  readOnly
                  plainText
                />
              </CCol>
            </CRow>
            <CRow className="mb-12 py-1">
              <CFormLabel
                htmlFor="inputKepada"
                className="col-sm-3 col-form-label text-end"
              >
                Memo Kepada:
              </CFormLabel>
              <CCol sm={6}>
                <CFormInput id="inputKepada" value={memoKepada} readOnly />
              </CCol>
            </CRow>
            <CRow className="mb-12 py-1">
              <CFormLabel
                htmlFor="inputDari"
                className="col-sm-3 col-form-label text-end"
              >
                Memo Dari:
              </CFormLabel>
              <CCol sm={4}>
                <CFormInput id="inputDari" value={memoDari} readOnly />
              </CCol>
              <CCol sm={2}>
                <CButton color="danger">
                  <CIcon icon={cilXCircle} size="s" />
                </CButton>
                <CButton
                  className="mx-2"
                  color="primary"
                  onClick={() => setVisible2(!visible2)}
                >
                  <CIcon icon={cilPlus} size="s" />
                </CButton>
              </CCol>
            </CRow>
            <CRow className="mb-12 py-1">
              <CFormLabel
                htmlFor="inputNoMemoTerakhir"
                className="col-sm-3 col-form-label text-end"
              >
                No. Memo Terakhir:
              </CFormLabel>
              <CCol sm={4}>
                <CFormInput
                  id="inputNoMemoTerakhir"
                  value={noMemoTerakhir}
                  readOnly
                />
              </CCol>
            </CRow>
            <CRow className="mb-12 py-1">
              <CFormLabel
                htmlFor="inputNoMemoTerakhir"
                className="col-sm-3 col-form-label text-end"
              >
                No. Memo:
              </CFormLabel>
              <CCol sm={2}>
                <CFormInput
                  id="inputNoMemoTerakhir"
                  value={noMemo}
                  onChange={(e) => {
                    setNoMemoRest('MEMO/VI/BPS/EDU/2022');
                    setNoMemo(e.target.value);
                  }}
                />
              </CCol>
              <CCol sm={4}>
                <CFormInput
                  id="inputNoMemoTerakhir"
                  value={noMemoRest}
                  readOnly
                />
              </CCol>
            </CRow>
            <CRow className="mb-12 py-1">
              <CFormLabel
                htmlFor="inputApprovalOleh"
                className="col-sm-3 col-form-label text-end"
              >
                Approval Oleh:
              </CFormLabel>
              <CCol sm={4}>
                <CFormInput
                  id="inputApprovalOleh"
                  value={approvalOleh}
                  readOnly
                />
              </CCol>
              <CCol sm={2}>
                <CButton color="danger">
                  <CIcon icon={cilXCircle} size="s" />
                </CButton>
                <CButton
                  className="mx-2"
                  color="primary"
                  onClick={() => setVisible3(!visible2)}
                >
                  <CIcon icon={cilPlus} size="s" />
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton
            className="text-end"
            color="secondary"
            onClick={() => setVisible(false)}
          >
            Close
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              setVisible(false);
              setModal2(!modal2);
            }}
          >
            Next
          </CButton>
        </CModalFooter>
      </CModal>

      <CModal size="md" visible={visible2} onClose={() => setVisible2(false)}>
        <CModalHeader>
          <CModalTitle>PIC Anggaran</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CTable responsive="sm" striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Singkatan</CTableHeaderCell>
                <CTableHeaderCell scope="col">PIC Posisi</CTableHeaderCell>
                <CTableHeaderCell scope="col">PIC Divisi</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setMemoDari('Kepala Bisnis Perusahaan');
                  setVisible2(false);
                  setNoMemoTerakhir('263.MEMO/VI/BPS/EDU/2022');
                }}
              >
                <CTableDataCell>BPS</CTableDataCell>
                <CTableDataCell>Kepala Bisnis Perusahaan</CTableDataCell>
                <CTableDataCell>Divisi Bisnis Perusahaan</CTableDataCell>
              </CTableRow>
              <CTableRow
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setMemoDari('Kepala Administrasi');
                  setVisible2(false);
                  setNoMemoTerakhir('263.MEMO/VI/ADS/EDU/2022');
                }}
              >
                <CTableDataCell>ADS</CTableDataCell>
                <CTableDataCell>Kepala Administrasi</CTableDataCell>
                <CTableDataCell>Divisi Administrasi</CTableDataCell>
              </CTableRow>
              <CTableRow
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setMemoDari('Kepala Operasi');
                  setVisible2(false);
                  setNoMemoTerakhir('263.MEMO/VI/OPR/EDU/2022');
                }}
              >
                <CTableDataCell>OPR</CTableDataCell>
                <CTableDataCell>Kepala Operasi</CTableDataCell>
                <CTableDataCell>Divisi Operasi</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CModalBody>
      </CModal>

      <CModal size="md" visible={visible3} onClose={() => setVisible3(false)}>
        <CModalHeader>
          <CModalTitle>PIC Anggaran</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CTable responsive="sm" striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Singkatan</CTableHeaderCell>
                <CTableHeaderCell scope="col">PIC Posisi</CTableHeaderCell>
                <CTableHeaderCell scope="col">PIC Divisi</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setApprovalOleh('Kepala Bisnis Perusahaan');
                  setVisible3(false);
                }}
              >
                <CTableDataCell>BPS</CTableDataCell>
                <CTableDataCell>Kepala Bisnis Perusahaan</CTableDataCell>
                <CTableDataCell>Divisi Bisnis Perusahaan</CTableDataCell>
              </CTableRow>
              <CTableRow
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setApprovalOleh('Kepala Administrasi');
                  setVisible3(false);
                }}
              >
                <CTableDataCell>ADS</CTableDataCell>
                <CTableDataCell>Kepala Administrasi</CTableDataCell>
                <CTableDataCell>Divisi Administrasi</CTableDataCell>
              </CTableRow>
              <CTableRow
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setApprovalOleh('Kepala Operasi');
                  setVisible3(false);
                }}
              >
                <CTableDataCell>OPR</CTableDataCell>
                <CTableDataCell>Kepala Operasi</CTableDataCell>
                <CTableDataCell>Divisi Operasi</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CModalBody>
      </CModal>

      <CModal size="lg" visible={modal2} onClose={() => setModal2(false)}>
        <CModalHeader>
          <CModalTitle>Step 2: Tipe Perjalanan</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CRow className="mb-12">
              <CFormLabel
                htmlFor="groupPerjalananInput"
                className="col-sm-3 col-form-label text-end"
              >
                Group Perajalanan:
              </CFormLabel>
              <CCol sm={4}>
                <CFormCheck
                  type="radio"
                  name="groupPerjalananInput"
                  id="flexRadioDefault1"
                  label="Domestik"
                />
                <CFormCheck
                  type="radio"
                  name="groupPerjalananInput"
                  id="flexRadioDefault2"
                  label="Luar Negri"
                  defaultChecked
                />
              </CCol>
            </CRow>
            <CRow className="mb-12 py-4">
              <CFormLabel
                htmlFor="tipePerjalananInput"
                className="col-sm-3 col-form-label text-end"
              >
                Tipe Perjalanan:
              </CFormLabel>
              <CCol sm={4}>
                <CFormCheck
                  type="radio"
                  name="tipePerjalananInput"
                  id="tipePerjalanan1"
                  label="Jabatan"
                  defaultChecked
                />
                <CFormCheck
                  type="radio"
                  name="tipePerjalananInput"
                  id="tipePerjalanan2"
                  label="Mutasi Jabatan"
                />
                <CFormCheck
                  type="radio"
                  name="tipePerjalananInput"
                  id="tipePerjalanan3"
                  label="Pemeliharaan"
                />
                <CFormCheck
                  type="radio"
                  name="tipePerjalananInput"
                  id="tipePerjalanan4"
                  label="Pendidikan dan Pelatihan"
                />
                <CFormCheck
                  type="radio"
                  name="tipePerjalananInput"
                  id="tipePerjalanan5"
                  label="Pensiun"
                />
                <CFormCheck
                  type="radio"
                  name="tipePerjalananInput"
                  id="tipePerjalanan6"
                  label="Perawatan dan Kesehatan"
                />
                <CFormCheck
                  type="radio"
                  name="tipePerjalananInput"
                  id="tipePerjalanan7"
                  label="Proyek"
                />
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton
            className="text-end"
            color="secondary"
            onClick={() => {
              setVisible(!visible);
              setModal2(false);
            }}
          >
            Previous
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              setModal3(!modal3);
              setModal2(false);
            }}
          >
            Next
          </CButton>
        </CModalFooter>
      </CModal>

      <CModal size="lg" visible={modal3} onClose={() => setModal3(false)}>
        <CModalHeader>
          <CModalTitle>Step 3: Tipe Waktu & Pembiayaan</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CRow className="mb-12">
              <CFormLabel
                htmlFor="groupTipeWaktuInput"
                className="col-sm-3 col-form-label text-end"
              >
                Tipe Waktu:
              </CFormLabel>
              <CCol sm={4}>
                <CFormCheck
                  type="radio"
                  name="groupTipeWaktuInput"
                  id="tipeWaktu1"
                  label="24 Jam < PD <=30 hari"
                />
                <CFormCheck
                  type="radio"
                  name="groupTipeWaktuInput"
                  id="tipeWaktu2"
                  label="PD <= 24 Jam"
                  defaultChecked
                />
                <CFormCheck
                  type="radio"
                  name="groupTipeWaktuInput"
                  id="tipeWaktu3"
                  label="PD > 30 Hari"
                />
              </CCol>
            </CRow>
            <CRow className="mb-12 py-4">
              <CFormLabel
                htmlFor="groupTipePembiayaanInput"
                className="col-sm-3 col-form-label text-end"
              >
                Tipe Pembiayaan:
              </CFormLabel>
              <CCol sm={4}>
                <CFormCheck
                  type="radio"
                  name="groupTipePembiayaanInput"
                  id="tipePembiayaanInput1"
                  label="Perusahaan"
                  defaultChecked
                />
                <CFormCheck
                  type="radio"
                  name="groupTipePembiayaanInput"
                  id="tipePembiayaanInput2"
                  label="Perusahaan & Pihak Lain"
                />
                <CFormCheck
                  type="radio"
                  name="groupTipePembiayaanInput"
                  id="tipePembiayaanInput3"
                  label="Pihak Lain"
                />
              </CCol>
            </CRow>
            <CRow className="mb-12 py-4">
              <CFormLabel
                htmlFor="groupTipeAkomodasi"
                className="col-sm-3 col-form-label text-end"
              >
                Tipe Akomodasi:
              </CFormLabel>
              <CCol sm={4}>
                <CFormCheck
                  type="radio"
                  name="groupTipeAkomodasi"
                  id="tipeAkomodasi1"
                  label="Ditanggung"
                  defaultChecked
                />
                <CFormCheck
                  type="radio"
                  name="groupTipeAkomodasi"
                  id="tipeAkomodasi2"
                  label="Tidak ditanggung"
                />
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton
            className="text-end"
            color="secondary"
            onClick={() => {
              setModal2(!modal2);
              setModal3(modal3);
            }}
          >
            Previous
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              setModal3(false);
              setModal4(!modal4);
            }}
          >
            Next
          </CButton>
        </CModalFooter>
      </CModal>

      <CModal size="lg" visible={modal4} onClose={() => setModal4(false)}>
        <CModalHeader>
          <CModalTitle>Step 4: Check Anggaran</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CRow className="mb-12">
              <CFormLabel
                htmlFor="inputAnggaran"
                className="col-sm-3 col-form-label text-end"
              >
                Anggaran:
              </CFormLabel>
              <CCol sm={3}>
                <CFormInput
                  id="inputAnggaran"
                  value={plafonAnggaran}
                  readOnly
                  plainText
                />
              </CCol>
            </CRow>
            <CRow className="mb-12 py-2">
              <CFormLabel
                htmlFor="inputAnggaran"
                className="col-sm-3 col-form-label text-end"
              >
                Memo Complete:
              </CFormLabel>
              <CCol sm={3}>
                <CFormInput
                  id="inputAnggaran"
                  value={memoComplete}
                  readOnly
                  plainText
                />
              </CCol>
            </CRow>
            <CRow className="mb-12 py-2">
              <CFormLabel
                htmlFor="inputAnggaran"
                className="col-sm-3 col-form-label text-end"
              >
                Realisasi On Process:
              </CFormLabel>
              <CCol sm={3}>
                <CFormInput
                  id="inputAnggaran"
                  value={realisasiAnggaranOnProcess}
                  readOnly
                  plainText
                />
              </CCol>
            </CRow>
            <CRow className="mb-12 py-2">
              <CFormLabel
                htmlFor="inputAnggaran"
                className="col-sm-3 col-form-label text-end"
              >
                Realisasi:
              </CFormLabel>
              <CCol sm={3}>
                <CFormInput
                  id="inputAnggaran"
                  value={realiasiAnggaran}
                  readOnly
                  plainText
                />
              </CCol>
            </CRow>
            <CRow className="mb-12 py-2">
              <CFormLabel
                htmlFor="inputAnggaran"
                className="col-sm-3 col-form-label text-end"
              >
                Sisa:
              </CFormLabel>
              <CCol sm={3}>
                <CFormInput
                  id="inputAnggaran"
                  value={sisaAnggaran}
                  readOnly
                  plainText
                />
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton
            className="text-end"
            color="secondary"
            onClick={() => {
              setModal3(!modal3);
              setModal4(false);
            }}
          >
            Previous
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              setModal4(false);
              setModal5(!modal5);
            }}
          >
            Next
          </CButton>
        </CModalFooter>
      </CModal>

      <CModal size="xl" visible={modal5} onClose={() => setModal5(false)}>
        <CModalHeader>
          <CModalTitle>Step 5: Add Rute Domestik</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CRow className="mb-12 ps-5">
              <CCol sm={6}>
                  <CRow className="mb-12 ps-1">
                      <CFormLabel
                    htmlFor="inputAnggaran"
                    className="col-sm-2 col-form-label text-end"
                  >
                    No Urut:
                  </CFormLabel>
                  <CCol sm={2}>
                    <CFormInput id="inputAnggaran" value="1" readOnly />
                  </CCol>
                  </CRow>
              </CCol>
              <CCol sm={6}>

              </CCol>              
            </CRow>
            <CRow className="mb-12  py-2">
              <CCol sm={6}>
                <CRow className="mb-12">
                  <CFormLabel
                    htmlFor="dariTujuanInput"
                    className="col-sm-3 col-form-label text-end"
                  >
                    Dari:
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormInput
                      id="dariTujuanInput"
                      value={dariTujuan}
                      readOnly
                    />
                  </CCol>
                  <CCol sm={3}>
                    <CButton color="danger">
                      <CIcon icon={cilXCircle} size="s" />
                    </CButton>
                    <CButton
                      className="mx-2"
                      color="primary"
                      onClick={() => setModalKota(!modalKota)}
                    >
                      <CIcon icon={cilPlus} size="s" />
                    </CButton>
                  </CCol>
                </CRow>
                <CRow className="mb-12 py-2">
                  <CFormLabel
                    htmlFor="dariTujuanInput"
                    className="col-sm-3 col-form-label text-end"
                  >
                    Start Date:
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormInput
                      id="dariTujuanInput"
                      value={startDate}
                      readOnly
                    />
                  </CCol>
                </CRow>
                <CRow className="mb-12 py-2">
                  <CFormLabel
                    htmlFor="dariTujuanInput"
                    className="col-sm-3 col-form-label text-end"
                  >
                    Transportasi:
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormSelect
                      aria-label="Default select example"
                      options={[
                        'Open this select menu',
                        { label: 'Kapal Laut', value: '1' },
                        { label: 'Pesawat Terbang', value: '2' },
                        { label: 'Kereta Api', value: '3', disabled: true }
                      ]}
                    />
                  </CCol>
                </CRow>
              </CCol>
              <CCol sm={6}>
                <CRow className="mb-12">
                  <CFormLabel
                    htmlFor="keTujuan"
                    className="col-sm-3 col-form-label text-end"
                  >
                    Ke:
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormInput id="keTujuan" value={keTujuan} readOnly />
                  </CCol>
                  <CCol sm={3}>
                    <CButton color="danger">
                      <CIcon icon={cilXCircle} size="s" />
                    </CButton>
                    <CButton
                      className="mx-2"
                      color="primary"
                      onClick={() => setModalKotaTujuan(!modalKotaTujuan)}
                    >
                      <CIcon icon={cilPlus} size="s" />
                    </CButton>
                  </CCol>
                </CRow>
                <CRow className="mb-12 py-2">
                  <CFormLabel
                    htmlFor="dariTujuanInput"
                    className="col-sm-3 col-form-label text-end"
                  >
                    End Date:
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormInput
                      id="dariTujuanInput"
                      value={endDate}
                      readOnly
                    />
                  </CCol>
                </CRow>
                <CRow className="mb-12 py-2">
                  <CFormLabel
                    htmlFor="dariTujuanInput"
                    className="col-sm-3 col-form-label text-end"
                  >
                    Unit Check:
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormSelect
                      aria-label="Default select example"
                      options={[
                        'Open this select menu',
                        { label: 'EDU Head Office', value: '1' },
                        { label: 'Suralaya PGU', value: '2' },
                        { label: 'Cilegon PGU', value: '3', disabled: true }
                      ]}
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton
            className="text-end"
            color="secondary"
            onClick={() => {
              setModal4(!modal4);
              setModal5(false);
            }}
          >
            Previous
          </CButton>
          <CButton
            color="primary"
            onClick={() => {
              setModal5(false);
            }}
          >
            Submit
          </CButton>
        </CModalFooter>
      </CModal>

      <CModal size="md" visible={modalKota} onClose={() => setModalKota(false)}>
        <CModalHeader>
          <CModalTitle>Ke</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CTable responsive="sm" striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Id</CTableHeaderCell>
                <CTableHeaderCell scope="col">Tipe</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                <CTableHeaderCell scope="col">Kategori</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setDariTujuan('Bandung');
                  setModalKota(false);
                }}
              >
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>Kota</CTableDataCell>
                <CTableDataCell>Bandung</CTableDataCell>
                <CTableDataCell>Ibu Kota Provinsi</CTableDataCell>
              </CTableRow>
              <CTableRow
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setDariTujuan('Surabaya');
                  setModalKota(false);
                }}
              >
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>Kota</CTableDataCell>
                <CTableDataCell>Surabaya</CTableDataCell>
                <CTableDataCell>Ibu Kota Provinsi</CTableDataCell>
              </CTableRow>
              <CTableRow
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setDariTujuan('Makasar');
                  setModalKota(false);
                }}
              >
                <CTableDataCell>3</CTableDataCell>
                <CTableDataCell>Kota</CTableDataCell>
                <CTableDataCell>Makasar</CTableDataCell>
                <CTableDataCell>Ibu Kota Provinsi</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CModalBody>
      </CModal>

      <CModal
        size="md"
        visible={modalKotaTujuan}
        onClose={() => setModalKotaTujuan(false)}
      >
        <CModalHeader>
          <CModalTitle>Ke</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CTable responsive="sm" striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">Id</CTableHeaderCell>
                <CTableHeaderCell scope="col">Tipe</CTableHeaderCell>
                <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                <CTableHeaderCell scope="col">Kategori</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setKeTujuan('Bandung');
                  setModalKotaTujuan(false);
                }}
              >
                <CTableDataCell>1</CTableDataCell>
                <CTableDataCell>Kota</CTableDataCell>
                <CTableDataCell>Bandung</CTableDataCell>
                <CTableDataCell>Ibu Kota Provinsi</CTableDataCell>
              </CTableRow>
              <CTableRow
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setKeTujuan('Surabaya');
                  setModalKotaTujuan(false);
                }}
              >
                <CTableDataCell>2</CTableDataCell>
                <CTableDataCell>Kota</CTableDataCell>
                <CTableDataCell>Surabaya</CTableDataCell>
                <CTableDataCell>Ibu Kota Provinsi</CTableDataCell>
              </CTableRow>
              <CTableRow
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setKeTujuan('Makasar');
                  setModalKotaTujuan(false);
                }}
              >
                <CTableDataCell>3</CTableDataCell>
                <CTableDataCell>Kota</CTableDataCell>
                <CTableDataCell>Makasar</CTableDataCell>
                <CTableDataCell>Ibu Kota Provinsi</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CModalBody>
      </CModal>
    </>
  );
};

export default Memos;
